import React from "react";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  padding: 5px 10px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #c6c6c6;

  label {
    display: flex;
    width: 100%;
  }

  input {
    flex: 1;
  }
`;

const RangeInput = ({
  label = "Label",
  value = 0,
  step = 1,
  minValue = 0,
  maxValue = 255,
  onChange,
}) => {
  return (
    <Container>
      <label>
        <span>{label}</span>
        <input
          type="range"
          value={value}
          min={minValue}
          max={maxValue}
          step={step}
          onChange={onChange}
        />
      </label>
    </Container>
  );
};

export default RangeInput;
