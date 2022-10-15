import React from "react";
import Select from "react-select";

export default function FilterSelect({ setFilterSelect, filterSelect }) {
  const onChange = (value) => {
    setFilterSelect(value);
  };
  const options = [
    { value: 1, label: "Urgent" },
    { value: 2, label: "Regular" },
    { value: 3, label: "Trivial" },
    { value: 4, label: "Name big to small" },
    { value: 5, label: "Name small to big" },
  ];
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Select
        options={options}
        value={filterSelect}
        onChange={onChange}
        placeholder="Priority (all)"
      />
    </div>
  );
}
