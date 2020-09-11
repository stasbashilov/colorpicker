import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useClickOutside from "../../hooks/useClickOutside";
import { rgb2hex, hex2Rgb } from "../../utils";

import RangeInput from "./RangeInput";

const DropdownHolder = styled.div`
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const MainButton = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  padding: 3px;
  border: 1px solid #c6c6c6;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  
    &:hover {
    opacity: .8;
  }
`;

const Button = styled.div`
  padding: 5px;
  border: 1px solid #c6c6c6;
  color: ${({ submitButton }) => (submitButton ? "#ffffff" : "#c6c6c6")};
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  min-width: 60px;
  display: flex;
  justify-content: center;
  background: ${({ submitButton }) => (submitButton ? "#008B02" : "")};
  cursor: pointer;
  
  &:hover {
    opacity: .8;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const Wraper = styled.div`
  height: 140px;
  width: 200px;
  background: #ffffff;
  position: absolute;
  border-radius: 3px;
  left: -155px;
  top: 70px;
  box-shadow: 0px 5px 20px 5px #c6c6c6;

  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12px 15px 12px;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    top: -15px;
    right: 11px;
  }
`;

const ColorLabel = styled.div`
  background: ${(props) => props.color};
  width: 35px;
  height: 35px;
  border-radius: 3px;
`;

const Range = (props) => {
  const [current, setCurrentColor] = useState(hex2Rgb(props.value));
  const [open, setOpen] = useState(false);
  const node = useClickOutside(() => setOpen(false));

  useEffect(() => {
    setCurrentColor(hex2Rgb(props.value));
  }, [props.value]);

  const handleClick = () => {
    props.onChange(rgb2hex(current));
    setOpen(false);
  };

  const handleCancelClick = (e) => {
    setCurrentColor(hex2Rgb(props.value));
    setOpen(false);
  };

  const handleRangeChange = (name) => (e) => {
    const changedColors = {
      ...current,
      [name]: +e.target.value,
    };

    setCurrentColor(changedColors);
  };

  return (
    <DropdownHolder ref={node}>
      <MainButton onClick={() => setOpen(true)}>
        <ColorLabel color={rgb2hex(current)} />
      </MainButton>
      {open && (
        <Wraper>
          <RangeInput
            label="R"
            value={current.r}
            onChange={handleRangeChange("r")}
          />
          <RangeInput
            label="G"
            value={current.g}
            onChange={handleRangeChange("g")}
          />
          <RangeInput
            label="B"
            value={current.b}
            onChange={handleRangeChange("b")}
          />
          <Buttons>
            <Button onClick={handleClick} submitButton={true}>
              OK
            </Button>
            <Button onClick={handleCancelClick}>CANCEL</Button>
          </Buttons>
        </Wraper>
      )}
    </DropdownHolder>
  );
};

export default Range;
