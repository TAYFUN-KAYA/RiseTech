import React from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { SET_JOB } from "../store/actions";

const { createContext, useState } = require("react");

const DeleteModalContext = createContext();

const DeleteModalProvider = ({ children }) => {
  const StyledContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 100px;
    padding-right: 100px;
    border-radius: 4px;
  `;

  const StyledTitle = styled.text`
    font-size: 19px;
    font-weight: 700;
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

  const StyledWarning = styled.div`
    width: 70px;
    height: 70px;
    padding: 10px;
    border-radius: 35px;
    border: 5px solid #e83d6d;
    display: flex;
    color: #e83d6d;
    justify-content: center;
    align-items: center;
    font-size: 55px;
  `;

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
      localstoragesData.splice(indexLocalStorage, 1);
      localStorage.setItem("jobs", JSON.stringify([...localstoragesData]));
    } else {
      var index = jobs.findIndex((o) => {
        return o.id === item.id;
      });
      jobs.splice(index, 1);
    }
    SET_JOB([...jobs]);
    handleClose();
  };
  const handleModal = (item, jobs) => {
    handleOpen();
    setItem(item);
    setJobs(jobs);
  };
  return (
    <DeleteModalContext.Provider value={{ handleModal }}>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledContainer class="flex flex-col">
            <div className="flex flex-row justify-center items-center mb-8">
              <StyledWarning>
                <text>!</text>
              </StyledWarning>
            </div>

            <div className="flex flex-row justify-center items-center">
              <StyledTitle>Are you sure you want to delete it ?</StyledTitle>
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
    </DeleteModalContext.Provider>
  );
};

export { DeleteModalContext, DeleteModalProvider };
