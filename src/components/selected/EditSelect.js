import React from "react";
import Select from "react-select";

export default function EditSelect({ setUpdatePriortiy, updatePriority }) {
  const onChange = (value) => {
    setUpdatePriortiy(value);
  };
  const options = [
    { value: 1, label: "Urgent" },
    { value: 2, label: "Regular" },
    { value: 3, label: "Trivial" },
  ];
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Select
        options={options}
        value={updatePriority}
        onChange={onChange}
        placeholder="Priority (all)"
      />
    </div>
  );
}
