import React from "react";
import logo from "../../image/logo.jpeg";
import styled from "styled-components";
import Divider from "../divider/Divider";

const StyledImg = styled.div`
  background-image: url(${logo});
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Navbar = () => {
  return (
    <div className=" flex mb-4">
      <div className="w-full flex flex-col">
        <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full mb-2 pt-8 pl-8">
          <StyledImg />
        </div>
        <div className="w-full bg-slate-400">
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
