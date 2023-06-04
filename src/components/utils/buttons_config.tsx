import { IButtonElement } from "../model";
// viewValue. Required. Unique element which you see in UI, also used like a "key" attribute
// type. Required. Set type of button. Is that operator function, number, etc..
// appendBtnValue for buttons which are numbers and dot.
// attributes. Not required. it's an object, where you set all attribute which btn will have. WARNING it used with spread operator {...attributes}

const CALCULATOR_BUTTONS_CONFIG: IButtonElement[] = [
  {
    viewValue: "AC",
    type: "AC_OPERATION",
    attributes: {
      gridSpan: 2,
      buttonColor: "func",
    },
  },
  {
    viewValue: "DEL",
    type: "DELETE_OPERATION", 
    attributes: {
      buttonColor: "func",
    },
  },
  {
    viewValue: "/",
    type: "OPERATION",
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: "7",
    type: "VALUE",
    appendBtnValue: true,
  },
  {
    viewValue: "8",
    type: "VALUE",
    appendBtnValue: true,
  },
  {
    viewValue: "9",
    type: "VALUE",
    appendBtnValue: true,
  },
  {
    viewValue: "*",
    type: "OPERATION",
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: "4",
    type: "VALUE",
    appendBtnValue: true,
  },
  {
    viewValue: "5",
    type: "VALUE",
    appendBtnValue: true,
  },
  {
    viewValue: "6",
    type: "VALUE",
    appendBtnValue: true,
  },
  {
    viewValue: "+",
    type: "OPERATION",
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: "1",
    type: "VALUE",
    appendBtnValue: true,
  },
  {
    viewValue: "2",
    type: "VALUE",
    appendBtnValue: true,
  },
  {
    viewValue: "3",
    type: "VALUE",
    appendBtnValue: true,
  },
  {
    viewValue: "-",
    type: "OPERATION",
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: ".",
    type: "VALUE",
    attributes: {
      buttonColor: "func",
      leftBtnRadius: true,
    },
    appendBtnValue: true,
  },
  {
    viewValue: "0",
    type: "VALUE",
    appendBtnValue: true,
  },
  {
    viewValue: "=",
    type: "CALCULATE_OPERATION",
    attributes: {
      gridSpan: 2,
      buttonColor: "operation",
      rightBtnRadius: true,
    },
  },
];

export default CALCULATOR_BUTTONS_CONFIG;
