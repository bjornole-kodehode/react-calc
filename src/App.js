import React from "react";


import { ToggleStyles } from "./components/ToggleStyles";
import { Button } from "./components/Button";
import { Container } from "./Container.style";
import { GlobalStyles } from "./GlobalStyles.style";
import { StyledButton } from "./components/Buttons/Button.style";
import { Display } from "./components/Display.style";








function App() {


  const buttonValues = [
    7,8,9,"DEL",
    4,5,6,"+"
    ,1,2,3,"-",
    ".",0,"/","x",
    "RESET","=",
  ];
  
  const buttons = buttonValues.map((btn, i) => {
    return <StyledButton value={btn} key={i}></StyledButton>;
  });
  


 

  return (
    <>
        <ToggleStyles>
            <p className="test">calc</p>
            <div className="test3">
              <p className="test">THEME</p>
              <div className="test4">  
                <p>1 2 3</p>
                <div class="tri-state-toggle">
                  <input class="button" type="radio" name="toggle" id="one" />
                  <input class="button" type="radio" name="toggle" id="two" />
                  <input class="button" type="radio" name="toggle" id="three" />
                </div>
              </div>
            </div>
        </ToggleStyles> 
      <Display />
        {/* <ThemeProvider theme={theme}>
        <StyledButtons onClick={handleThemeToggled}>Toggle</StyledButtons> */} 
        <Container>
          <GlobalStyles />
          {buttons}
        </Container>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
