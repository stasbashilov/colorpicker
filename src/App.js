import React, { useState } from "react";

import styled from "styled-components";

import ColorPicker from "./components/ColorPicker";
import defaultColors from "./data/defaultColors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const App = () => {
  const [value, setValue] = useState("#ffffff");

  return (
    <div className="App">
      <Container>
        <ColorPicker
          value={value}
          onChange={setValue}
          colors={defaultColors}
        />
      </Container>
    </div>
  );
};

export default App;
