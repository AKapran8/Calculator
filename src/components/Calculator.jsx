import React from "react";
import { Container, Current, Previous, Screen, Button } from "./Styled/styled";
import useCalculate from "./Hooks/Calculate";
import CALCULATOR_BUTTONS_CONFIG from "./utils/buttons_config";

const Calculator = () => {
  const calculator = useCalculate();

  const handleClick = (type, value) => {
    switch (type) {
      case "AC_OPERATION": {
        return calculator.clearAllValue();
      }
      case "DELETE_OPERATION": {
        return calculator.deleteValue();
      }
      case "CALCULATE_OPERATION": {
        return calculator.equalCalculate();
      }
      case "OPERATION": {
        return calculator.operate(value);
      }
      default:
        return calculator.appendValue(value);
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
          onClick={handleClick.bind(null, btn.type, btn.viewValue)}
        >
          {btn.viewValue}
        </Button>
      ))}
    </Container>
  );
};

export default Calculator;
