import React, { useState } from "react";

import styled from "styled-components";
import useClickOutside from "../../hooks/useClickOutside";

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

  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 12px 0 12px;
    border-color: #c6c6c6 transparent transparent transparent;
    position: absolute;
    top: 14px;
    left: 8px;
  }
  
`;

const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 auto;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background: #4377b2;
  }
`;

const ColorLabel = styled.div`
  background: ${(props) => props.color};
  width: 25px;
  height: 25px;
`;

const ColorText = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  color: #c6c6c6;
`;

const DropdownHolder = styled.div`
  justify-content: space-between;
  align-items: center;
  position: relative;
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

const Container = styled.div`
  overflow-y: auto;
  height: 140px;
`;

const Select = (props) => {
  const [open, setOpen] = useState(false);
  const node = useClickOutside(() => setOpen(false));

  return (
    <DropdownHolder ref={node}>
      <MainButton onClick={() => setOpen(true)}/>
      {open && (
        <Wraper>
          <Container>
            {props.colors.map((color, index) => {
              return (
                <Color
                  key={index}
                  onClick={() => {
                    props.onChange(color.value);
                  }}
                >
                  <ColorText>{color.text}</ColorText>
                  <ColorLabel color={color.value} />
                </Color>
              );
            })}
          </Container>
        </Wraper>
      )}
    </DropdownHolder>
  );
};

export default Select;
