import React from "react";

const Priority = ({ priority }) => {
  return (
    <div
      className="flex flex-row w-full items-center justify-center text-white rounded"
      style={{
        background:
          priority === 1 ? "#e83d6d" : priority === 2 ? "#f1a824" : "#2377e0",
        width: "100px",
        height: "30px",
        fontSize: "12px",
        fontWeight: "700",
      }}
    >
      {priority === 1 ? "Urgent" : priority === 2 ? "Regular" : "Trivial"}
    </div>
  );
};

export default Priority;
