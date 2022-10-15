import React from "react";
import FooterLogo from "../logo/FooterLogo";

const Footer = () => {
  return (
    <div
      className="flex flex-row w-full pl-8 pr-8 mt-8 pt-2 pb-2 mb-2"
      style={{ background: "#e8e8e8" }}
    >
      <FooterLogo />
      <text
        className="flex pl-3 text-center items-center justify-center underline"
        style={{ color: "#858b91" }}
      >
        repository
      </text>
      <text
        className="flex w-full pl-3 text-center items-center justify-end"
        style={{ color: "#858b91" }}
      >
        © 2021 Tayfun Kaya
      </text>
    </div>
  );
};

export default Footer;
