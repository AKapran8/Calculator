// viewValue what we see in UI, also like a "key" attribute
// appendBtnValue if btn must change the number, that use this filed, also used in condition for func in component
// attributes it's an object, where all attribute which btn have. WARNING use with spread operator {...attributes}

const CALCULATOR_BUTTONS_CONFIG = [
  {
    viewValue: "AC",
    attributes: {
      gridSpan: 2,
      buttonColor: "func",
    },
  },
  {
    viewValue: "DEL",
    attributes: {
      buttonColor: "func",
    },
  },
  {
    viewValue: "÷",
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: "7",
    appendBtnValue: true,
  },
  {
    viewValue: "8",
    appendBtnValue: true,
  },
  {
    viewValue: "9",
    appendBtnValue: true,
  },
  {
    viewValue: "*",
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: "4",
    appendBtnValue: true,
  },
  {
    viewValue: "5",
    appendBtnValue: true,
  },
  {
    viewValue: "6",
    appendBtnValue: true,
  },
  {
    viewValue: "+",
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: "1",
    appendBtnValue: true,
  },
  {
    viewValue: "2",
    appendBtnValue: true,
  },
  {
    viewValue: "3",
    appendBtnValue: true,
  },
  {
    viewValue: "-",
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: ".",
    attributes: {
      buttonColor: "func",
      leftBtnRadius: true,
    },
    appendBtnValue: true,
  },
  {
    viewValue: "0",
    appendBtnValue: true,
  },
  {
    viewValue: "=",
    attributes: {
      gridSpan: 2,
      buttonColor: "operation",
      rightBtnRadius: true,
    },
  },
];

export default CALCULATOR_BUTTONS_CONFIG;
