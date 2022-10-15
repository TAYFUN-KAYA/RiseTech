import React from "react";
import styled from "styled-components";

const TextStyled = styled.text`
  font-size: 20px;
  font-weight: 700;
  color: black;
`;

const TitleText = ({ text }) => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full mb-2 pt-4 pl-8">
      <TextStyled>{text}</TextStyled>
    </div>
  );
};

export default TitleText;
