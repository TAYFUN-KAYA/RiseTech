import Select from "react-select";
import { useField } from "formik";
import React from "react";
import styled from "styled-components";
export default function SelectField(props) {
  /* eslint-disable no-unused-vars */

  const [filed, state, { setValue, setTouched }] = useField(props.field.name);

  /* eslint-enable no-unused-vars */

  const onChange = (value) => {
    setValue(value);
  };

  const StyledLabel = styled.label`
    font-size: 14px;
    font-weight: 700;
    padding-bottom: 10px;
  `;

  const StyledDiv = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
  `;

  return (
    <StyledDiv>
      <StyledLabel
        style={{
          color: props.errors ? "rgba(255, 0, 0, 0.7)" : "#A0A0A0",
        }}
      >
        Job Priority
      </StyledLabel>
      <Select
        {...props}
        value={state?.value}
        onChange={onChange}
        onBlur={setTouched}
        placeholder="Choose"
        styles={{
          control: (styles) => ({
            ...styles,
            border: props.errors && "1px solid rgba(255, 0, 0, 0.7)",
          }),
        }}
      />
      {props.errors ? (
        <StyledLabel
          style={{
            color: props.errors ? "rgba(255, 0, 0, 0.7)" : "#A0A0A0",
          }}
        >
          {props.errors}
        </StyledLabel>
      ) : null}
    </StyledDiv>
  );
}
