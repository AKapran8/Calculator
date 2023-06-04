import React, { useState } from "react";
import { Container, Current, Previous, Screen, Button } from "./Styled/styled";
import CALCULATOR_BUTTONS_CONFIG from "./utils/buttons_config";

const Calculator = () => {
  const [previousNumber, setPreviousNumber] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [operation, setOperation] = useState("");

  const appendValue = (value) => {
    setCurrentNumber((prevValue) => {
      if (prevValue.includes(".") && value === ".") return prevValue;
      return prevValue + value;
    });
  };

  const handleDelete = () => {
    if (currentNumber) setCurrentNumber((prev) => prev.slice(0, -1));
  };

  const handleAllClear = () => {
    setPreviousNumber("");
    setCurrentNumber("");
    setOperation("");
  };

  const handleButton = (type, value) => {
    switch (type) {
      case "AC": {
        return handleAllClear();
      }
      case "DELETE": {
        return handleDelete();
      }
      default:
        return appendValue(value);
    }
  };

  return (
    <Container>
      <Screen>
        <Previous>
          {previousNumber} {operation}
        </Previous>
        <Current> {currentNumber} </Current>
      </Screen>

      {CALCULATOR_BUTTONS_CONFIG.map((btn) => (
        <Button
          {...(btn.attributes && { ...btn.attributes })}
          key={btn.viewValue}
          onClick={handleButton.bind(null, btn.type, btn.keyValue)}
        >
          {btn.viewValue}
        </Button>
      ))}
    </Container>
  );
};

export default Calculator;
