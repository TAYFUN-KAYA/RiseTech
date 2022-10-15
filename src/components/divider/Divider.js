import React from "react";
import styled from "styled-components";

const Divider = () => {
  const DividerStyled = styled.div`
    width: 100%;
    height: 2px;
    background-color: #d0d0d0;
  `;

  return (
    <div className="flex">
      <div className="w-full">
        <DividerStyled />
      </div>
    </div>
  );
};

export default Divider;
