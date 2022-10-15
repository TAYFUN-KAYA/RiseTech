import React, { useContext } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { DeleteModalContext } from "../../../context/DeleteModalCtx";
import garbage from "../../../image/garbage.png";

const StyledImg = styled.div`
  background-image: url(${garbage});
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DeleteButton = ({ item, jobs }) => {
  const { handleModal } = useContext(DeleteModalContext);

  return (
    <button
      className="p-2 rounded"
      style={{ background: "#e8e8e8" }}
      onClick={() => handleModal(item, jobs)}
    >
      <StyledImg />
    </button>
  );
};

const S = (state) => ({
  jobs: state.jobs,
});

export default connect(S)(DeleteButton);
