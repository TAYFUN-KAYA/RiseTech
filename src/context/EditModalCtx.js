import React from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import EditSelect from "../components/selected/EditSelect";
import { SET_JOB } from "../store/actions";

const { createContext, useState } = require("react");

const EditModalContext = createContext();

const EditModalProvider = ({ children }) => {
  const StyledContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 30px;
    border-radius: 4px;
  `;

  const StyledTitle = styled.text`
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 10px;
  `;

  const StyledInput = styled.input`
    width: 430px;
    height: 40px;
    border: 1px solid #e8e9ef;
    font-size: 14px;
    font-weight: 700;
    padding: 10px;
    color: #a0a0a0;
    border-radius: 4px;
    min-width: 100px;
  `;

  const StyledLabel = styled.label`
    font-size: 14px;
    font-weight: 700;
    color: #a0a0a0;
    margin-bottom: 10px;
  `;

  const StyledCancelButton = styled.button`
    background-color: #f5f5f5;
    height: 40px;
    width: 130px;
    color: #a0a0a0;
    border-radius: 4px;
  `;

  const StyledSaveButton = styled.button`
    background-color: #e83d6d;
    height: 40px;
    width: 130px;
    color: white;
    border-radius: 4px;
  `;

  const [updatePriority, setUpdatePriortiy] = useState(null);
  const [item, setItem] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    const localstoragesData = JSON.parse(localStorage.getItem("jobs"));
    if (
      localstoragesData !== null &&
      localstoragesData.filter((data) => data.id === item.id).length > 0
    ) {
      var indexLocalStorage = localstoragesData.findIndex((o) => {
        return o.id === item.id;
      });
      localstoragesData[indexLocalStorage].priority = updatePriority?.value;
      localstoragesData[indexLocalStorage].priorityName = updatePriority?.label;
      localStorage.setItem("jobs", JSON.stringify([...localstoragesData]));
    } else {
      var index = jobs.findIndex((o) => {
        return o.id === item.id;
      });
      jobs[index].priority = updatePriority?.value;
      jobs[index].priorityName = updatePriority?.label;
    }

    SET_JOB([...jobs]);
    handleClose();
  };
  const handleModal = (item, jobs) => {
    handleOpen();
    setItem(item);
    setJobs(jobs);
    setUpdatePriortiy({ value: item.priority, label: item.priorityName });
  };
  return (
    <EditModalContext.Provider value={{ handleModal }}>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledContainer class="flex flex-col">
            <div className="flex flex-row justify-center items-center">
              <StyledTitle>Job Edit</StyledTitle>
            </div>
            <div className="flex flex-col w-full">
              <StyledLabel>Job Name</StyledLabel>
              <div className="flex flex-row w-full">
                <StyledInput
                  value={item?.name}
                  class="flex w-full"
                  disabled={true}
                ></StyledInput>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <StyledLabel>Job Priority</StyledLabel>
              <EditSelect
                setUpdatePriortiy={setUpdatePriortiy}
                updatePriority={updatePriority}
              />
            </div>
            <div className="flex flex-col justify-center md:flex-row items-center gap-8 mt-8">
              <StyledCancelButton onClick={handleClose}>
                Cancel
              </StyledCancelButton>
              <StyledSaveButton onClick={handleSave}>Save</StyledSaveButton>
            </div>
          </StyledContainer>
        </Modal>
      </div>
      {children}
    </EditModalContext.Provider>
  );
};

export { EditModalContext, EditModalProvider };
