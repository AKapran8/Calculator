import React from "react";
import { Container, Current, Previous, Screen, Button } from "./Styled/styled";
import useCalculate from "./Hooks/Calculate";
import CALCULATOR_BUTTONS_CONFIG from "./utils/buttons_config";

const Calculator = () => {
  const calculator = useCalculate();

  const clickHandler = (type, value) => {
    switch (type) {
      case "AC_OPERATION": {
        calculator.clearAllValue();
        break;
      }
      case "DELETE_OPERATION": {
        calculator.deleteValue();
        break;
      }
      case "CALCULATE_OPERATION": {
        calculator.equalCalculate();
        break;
      }
      case "OPERATION": {
        calculator.operate(value);
        break;
      }
      case "VALUE": {
        calculator.appendValue(value);
        break;
      }
      default:
        break;
    }
  };

  return (
    <Container>
      <Screen>
        <Previous>
          {calculator.value.previousValue} {calculator.value.operation}
        </Previous>
        <Current> {calculator.value.currentValue} </Current>
      </Screen>

      {CALCULATOR_BUTTONS_CONFIG.map((btn) => (
        <Button
          {...(btn.attributes && { ...btn.attributes })}
          key={btn.viewValue}
          onClick={clickHandler.bind(null, btn.type, btn.viewValue)}
        >
          {btn.viewValue}
        </Button>
      ))}
    </Container>
  );
};

export default Calculator;
