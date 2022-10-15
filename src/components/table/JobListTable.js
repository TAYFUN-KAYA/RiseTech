import React, { useState, useMemo } from "react";
import TitleText from "../text/TitleText";
import styled from "styled-components";
import seacrhlogo from "../../image/search.png";
import FilterSelect from "../selected/FilterSelect";
import Priority from "../priority/Priority";
import EditButton from "../button/edit/EditButton";
import DeleteButton from "../button/delete/DeleteButton";
import { connect } from "react-redux";

const StyledImg = styled.div`
  background-image: url(${seacrhlogo});
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  margin-left: 7px;
  margin-top: 10px;
`;

const JobListTable = ({ jobs }) => {
  const [search, setSearch] = useState("");
  const [filterSelect, setFilterSelect] = useState(null);

  const filterProirtyId = (id, result) => {
    let filterResult = result.filter((a) => a.priority === id);
    let notFilterResult = result.filter((a) => a.priority !== id);
    return [...filterResult, ...notFilterResult];
  };

  const sortedData = useMemo(() => {
    let result;
    const localstoragesData = JSON.parse(localStorage.getItem("jobs"));
    if (localstoragesData === null) {
      result = jobs;
    } else {
      result = [...jobs, ...localstoragesData];
    }

    if (filterSelect?.value === 1) {
      result = filterProirtyId(filterSelect?.value, result);
    } else if (filterSelect?.value === 2) {
      result = filterProirtyId(filterSelect?.value, result);
    } else if (filterSelect?.value === 3) {
      result = filterProirtyId(filterSelect?.value, result);
    } else if (filterSelect?.value === 4) {
      result = result.sort((a, b) => {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
    } else if (filterSelect?.value === 5) {
      result = result.sort((a, b) => {
        return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
      });
    } else {
      result = filterProirtyId(1, result);
    }

    return result.filter(
      (x) =>
        x?.name?.match(new RegExp(search, "gi")) ||
        x?.priorityName?.match(new RegExp(search, "gi"))
    );
  }, [jobs, filterSelect, search]);

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row sm:w-full md:w-full lg:w-full xl:w-full ">
        <TitleText text={"Job List"} />
        <text className="mb-2 pt-4 pr-8" style={{ color: "#bebebe" }}>
          (3/3)
        </text>
      </div>

      <div className="w-full flex flex-col md:flex-row pl-8 pr-8 mb-1">
        <div
          style={{ background: "#f2f4ff" }}
          className="w-full flex flex-col md:flex-row gap-4 p-8"
        >
          <div
            className="w-full flex flex-row sm:w-full md:w-full lg:w-4/6 xl:w-4/6 rounded-md"
            style={{ position: "relative" }}
          >
            <input
              style={{
                width: "100%",
                border: "1px solid #e8e8e8",
                height: "40px",
                paddingLeft: "40px",
              }}
              placeholder="Job Name"
              className="rounded-md"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
            <StyledImg />
          </div>
          <div className="w-full flex flex-row sm:w-full md:w-full lg:w-2/6 xl:w-2/6 ">
            <FilterSelect
              setFilterSelect={setFilterSelect}
              filterSelect={filterSelect}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row">
        <div className="w-full overflow-x-auto relative pl-8 pr-8">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead style={{ background: "#e4eafd", color: "#7d849c" }}>
              <tr>
                <th scope="col" className="py-3 px-6 w-3/6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6 w-2/6">
                  Priority
                </th>
                <th scope="col" className="py-3 px-6 w-1/6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody style={{ border: "1px solid #ededed" }}>
              {sortedData?.map((o, i) => {
                return (
                  <tr
                    key={i}
                    className=" text-black"
                    style={{
                      border: "1px solid #ededed",
                      background: i % 2 === 0 ? "#f9f9f9" : "",
                    }}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {o?.name}
                    </th>
                    <td className="py-4 px-6">
                      <Priority priority={o?.priority} />
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-row gap-4">
                        <EditButton item={o} />
                        <DeleteButton item={o} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const S = (state) => ({
  jobs: state.jobs,
});

export default connect(S)(JobListTable);
