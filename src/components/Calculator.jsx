import React, { useState } from "react";
import { Container, Current, Previous, Screen, Button } from "./Styled/styled";
import CALCULATOR_BUTTONS_CONFIG from "./buttons_config";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState("");

  const appendValue = (value) => {
    setCurrentNumber((prevValue) => {
      if (prevValue.includes(".") && value === ".") return prevValue;
      return prevValue + value;
    });
  };

  return (
    <Container>
      <Screen>
        <Previous></Previous>
        <Current> {currentNumber} </Current>
      </Screen>

      {CALCULATOR_BUTTONS_CONFIG.map((btn) => (
        <Button
          {...(btn.attributes && { ...btn.attributes })}
          key={btn.viewValue}
          onClick={
            btn.appendBtnValue
              ? appendValue.bind(null, btn.viewValue)
              : undefined
          }
        >
          {btn.viewValue}
        </Button>
      ))}
    </Container>
  );
};

export default Calculator;
