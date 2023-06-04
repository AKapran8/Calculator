import { useState } from "react";
import { OperationType } from "../model";

const useCalculate = () => {
  const [previousValue, setPreviousValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [operation, setOperation] = useState("");

  const appendValue = (value: string) => {
    setCurrentValue((prevValue: string) => {
      if (prevValue.includes(".") && value === ".") return prevValue;
      return prevValue + value;
    });
  };

  const deleteValue = () => {
    if (currentValue) setCurrentValue((prev: string) => prev.slice(0, -1));
  };

  const clearAllValue = () => {
    setPreviousValue("");
    setCurrentValue("");
    setOperation("");
  };

  const equalCalculate = () => {
    setOperation("");
    setPreviousValue("");
    setCurrentValue(calculateValue());
  };

  const calculateValue = () => {
    let result;
    switch (operation) {
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
        break;
    }

    return result?.toString() || "";
  };

  const operate = (operation: OperationType) => {
    if (!currentValue) return;
    if (!previousValue) {
      setPreviousValue(currentValue);
    } else {
      setPreviousValue(calculateValue());
    }
    setCurrentValue("");
    setOperation(operation);
  };

  return {
    value: {
      previousValue,
      currentValue,
      operation,
    },
    equalCalculate,
    deleteValue,
    clearAllValue,
    appendValue,
    operate,
  };
};

export default useCalculate;
