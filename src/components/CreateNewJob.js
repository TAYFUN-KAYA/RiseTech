import React from "react";
import TitleText from "./text/TitleText";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import SelectField from "./selected/CustomSelect";
import { SET_JOB } from "../store/actions";
import { connect } from "react-redux";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

const CreateNewJob = ({ jobs }) => {
  const CreateSchema = Yup.object().shape({
    job_name: Yup.string()
      .min(4, "Too Short Job Name!")
      .max(255, "Too Long Job Name!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "alphanumeric characters only"
      )
      .required(" Job Name required "),
    job_priority: Yup.object().required("Job priority required"),
  });

  const options = [
    { value: 1, label: "Urgent" },
    { value: 2, label: "Regular" },
    { value: 3, label: "Trivial" },
  ];

  const handleSubmit = (values) => {
    let id;
    const newData = {
      name: values.job_name,
      priority: values.job_priority.value,
      priorityName: values.job_priority.label,
    };
    SET_JOB([...jobs]);
    const localstoragesData = JSON.parse(localStorage.getItem("jobs"));

    if (localstoragesData === null || localstoragesData.length === 0) {
      id = jobs[jobs.length - 1].id + 1;
      newData.id = id;
      localStorage.setItem("jobs", JSON.stringify([newData]));
    } else {
      id = localstoragesData[localstoragesData.length - 1].id + 1;
      newData.id = id;
      localStorage.setItem(
        "jobs",
        JSON.stringify([...localstoragesData, newData])
      );
    }
    NotificationManager.success("Success", "Ekleme Başarılı !");
  };
  return (
    <div className=" flex mb-4">
      <div className="w-full flex flex-col">
        <TitleText text={"Create New Job"} />
        <Formik
          initialValues={{
            job_name: "",
          }}
          validationSchema={CreateSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="w-full flex flex-row sm:w-full md:w-full lg:w-3/6 xl:w-5/6 pr-8 pl-8 content-center items-center justify-center">
                  <Field name="job_name">
                    {({ field }) => (
                      <div className="w-full flex flex-col">
                        <label
                          style={{
                            fontSize: "14px",
                            fontWeight: "700",
                            color:
                              errors.job_name && touched.job_name
                                ? "rgba(255, 0, 0, 0.7)"
                                : "	#A0A0A0",
                          }}
                          htmlFor="job_name"
                        >
                          Job Name
                        </label>
                        <input
                          style={{
                            padding: "10px 20px",
                            border: errors.job_name
                              ? "1px solid rgba(255, 0, 0, 0.7)"
                              : "1px solid #A0A0A0",
                            borderRadius: "8px",
                            fontSize: "14px",
                            fontWeight: "700",
                            marginTop: "10px",
                            width: "100%",
                          }}
                          {...field}
                          type="text"
                          id="job_name"
                        />
                        {errors.job_name && touched.job_name ? (
                          <div
                            style={{
                              color: "rgba(255, 0, 0, 0.7)",
                              paddingTop: "10px",
                              fontWeight: "700",
                              fontSize: "14px",
                            }}
                          >
                            {errors.job_name}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="w-full flex flex-row sm:w-full md:w-full lg:w-2/6 xl:w-2/6 items-center justify-center">
                  <Field
                    component={SelectField}
                    name="job_priority"
                    options={options}
                    errors={errors?.job_priority}
                    errorsName={errors?.job_name}
                  ></Field>
                </div>
                <div className="w-full flex flex-row sm:w-full md:w-full lg:w-1/6 xl:w-1/6 items-center justify-center mt-3">
                  <button
                    style={{
                      color: "white",
                      padding: "10px",
                      width: "120px",
                      height: "40px",
                      background: "#2377e0",
                      fontSize: "15px",
                      borderRadius: "4px",
                    }}
                    type="submit"
                  >
                    + Create
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const S = (state) => ({
  jobs: state.jobs,
});

export default connect(S)(CreateNewJob);
