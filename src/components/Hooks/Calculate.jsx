import { useState } from "react";

const useCalculate = () => {
  const [previousValue, setPreviousValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [operation, setOperation] = useState("");

  const appendValue = (value) => {
    setCurrentValue((prevValue) => {
      if (prevValue.includes(".") && value === ".") return prevValue;
      return prevValue + value;
    });
  };

  const deleteValue = () => {
    if (currentValue) setCurrentValue((prev) => prev.slice(0, -1));
  };

  const clearAllValue = () => {
    setPreviousValue("");
    setCurrentValue("");
    setOperation("");
  };

  const equalCalculate = () => {
    setOperation("");
    setPreviousValue("");
    console.log(operation)
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
      case "÷":
        result = +previousValue / +currentValue;
        break;
      default:
        throw new Error("Invalid operator");
    }

    return result;
  };

  const operate = (operation) => {
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
