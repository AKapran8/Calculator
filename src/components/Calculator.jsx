import React, { useState } from "react";
import { Container, Current, Previous, Screen, Button } from "./Styled/styled";
import CALCULATOR_BUTTONS_CONFIG from "./utils/buttons_config";

const Calculator = () => {
  const [previousValue, setPreviousValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [operation, setOperation] = useState("");

  const appendValueHandler = (value) => {
    setCurrentValue((prevValue) => {
      if (prevValue.includes(".") && value === ".") return prevValue;
      return prevValue + value;
    });
  };

  const deleteHandler = () => {
    if (currentValue) setCurrentValue((prev) => prev.slice(0, -1));
  };

  const clearAllHandler = () => {
    setPreviousValue("");
    setCurrentValue("");
    setOperation("");
  };

  const calculateValue = (operator) => {
    let result;

    switch (operator) {
      case "+":
        result = +previousValue + +currentValue;
        break;
      case "-":
        result = +previousValue - +currentValue;
        break;
      case "*":
        result = +previousValue * +currentValue;
        break;
      case "/":
        result = +previousValue / +currentValue;
        break;
      default:
        throw new Error("Invalid operator");
    }

    return result;
  };

  const operationHandler = (operation) => {
    if (!currentValue) return;
    if (!previousValue) {
      setPreviousValue(currentValue);
    } else {
      setPreviousValue(calculateValue(operation));
    }
    setCurrentValue("");
    setOperation(operation);
  };

  const equalHandler = () => {
    setPreviousValue('');
    setCurrentValue(calculateValue(operation));
    setOperation("");
  };

  const handleClick = (type, value) => {
    switch (type) {
      case "AC_OPERATION": {
        return clearAllHandler();
      }
      case "DELETE_OPERATION": {
        return deleteHandler();
      }
      case "OPERATION": {
        return operationHandler(value);
      }
      case "EQUAL_OPERATION": {
        return equalHandler();
      }
      default:
        return appendValueHandler(value);
    }
  };

  return (
    <Container>
      <Screen>
        <Previous>
          {previousValue} {operation}
        </Previous>
        <Current> {currentValue} </Current>
      </Screen>

      {CALCULATOR_BUTTONS_CONFIG.map((btn) => (
        <Button
          {...(btn.attributes && { ...btn.attributes })}
          key={btn.viewValue}
          onClick={handleClick.bind(null, btn.type, btn.viewValue)}
        >
          {btn.viewValue}
        </Button>
      ))}
    </Container>
  );
};

export default Calculator;
