import React from "react";

import { Button } from "./components/Button";
import { Container } from "./Container.style";
import { GlobalStyles } from "./GlobalStyles.style";
import { StyledButton } from "./components/Buttons/Button.style";
import { Display, StyledDisplay } from "./components/Display.style";

function App() {
  const buttonValues = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "x",
    "RESET",
    "=",
  ];

  const buttons = buttonValues.map((btn, i) => {
    return <StyledButton value={btn} key={i}></StyledButton>;
  });

  return (
    <>
      <Display />
      <Container>
        <GlobalStyles />
        {buttons}
      </Container>
    </>
  );
}

export default App;
