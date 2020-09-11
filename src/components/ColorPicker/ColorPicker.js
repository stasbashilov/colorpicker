import React from "react";

import Select from "../Select";
import Range from "../Range";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 300px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #c6c6c6;
  border-radius: 3px;
  padding: 3px;
`;

const Value = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  color: #c6c6c6;
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
`;

const ColorPicker = ({ value, onChange, colors }) => (

  <Container>
    <Value>{value}</Value>
    <Holder>
      <Range
          onChange={onChange}
          value={value}
      />
      <Select
          colors={colors}
          onChange={onChange}
      />
    </Holder>
  </Container>
);

export default ColorPicker;
