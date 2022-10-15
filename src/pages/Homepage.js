import React, { useEffect } from "react";
import { connect } from "react-redux";
import CreateNewJob from "../components/CreateNewJob";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import JobListTable from "../components/table/JobListTable";
import { SET_JOB } from "../store/actions";
import axios from "axios";

const Homepage = () => {
  const getJobsFunc = async () => {
    await axios
      .get("http://localhost:8080/api/jobs")
      .then((res) => {
        SET_JOB(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getJobsFunc();
  }, []);

  return (
    <div>
      <Navbar />
      <CreateNewJob />
      <JobListTable />
      <Footer />
    </div>
  );
};

const S = (state) => ({
  jobs: state.jobs,
});

export default connect(S)(Homepage);
