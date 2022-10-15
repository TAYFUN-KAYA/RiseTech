import React, { useContext } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { EditModalContext } from "../../../context/EditModalCtx";
import editpen from "../../../image/editpen.png";

const StyledImg = styled.div`
  background-image: url(${editpen});
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const EditButton = ({ item, jobs }) => {
  const { handleModal } = useContext(EditModalContext);
  return (
    <button
      className="p-2 rounded"
      style={{ background: "#e8e8e8" }}
      onClick={() => {
        handleModal(item, jobs);
      }}
    >
      <StyledImg />
    </button>
  );
};

const S = (state) => ({
  jobs: state.jobs,
});

export default connect(S)(EditButton);
