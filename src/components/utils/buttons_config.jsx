// viewValue what we see in UI, also like a "key" attribute
// appendBtnValue if btn must change the number, that use this filed, also used in condition for func in component
// attributes it's an object, where all attribute which btn have. WARNING use with spread operator {...attributes}
// type. Type of btn, is that value or operator or func

const CALCULATOR_BUTTONS_CONFIG = [
  {
    viewValue: "AC",
    type: 'AC_OPERATION',
    attributes: {
      gridSpan: 2,
      buttonColor: "func",
    },
  },
  {
    viewValue: "DEL",
    type: 'DELETE_OPERATION',
    attributes: {
      buttonColor: "func",
    },
    delete: true
  },
  {
    viewValue: "÷",
    type: 'OPERATION',
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: "7",
    type: 'VALUE',
    appendBtnValue: true,
  },
  {
    viewValue: "8",
    type: 'VALUE',
    appendBtnValue: true,
  },
  {
    viewValue: "9",
    type: 'VALUE',
    appendBtnValue: true,
  },
  {
    viewValue: "*",
    type: 'OPERATION',
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: "4",
    type: 'VALUE',
    appendBtnValue: true,
  },
  {
    viewValue: "5",
    type: 'VALUE',
    appendBtnValue: true,
  },
  {
    viewValue: "6",
    type: 'VALUE',
    appendBtnValue: true,
  },
  {
    viewValue: "+",
    type: 'OPERATION',
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: "1",
    type: 'VALUE',
    appendBtnValue: true,
  },
  {
    viewValue: "2",
    type: 'VALUE',
    appendBtnValue: true,
  },
  {
    viewValue: "3",
    type: 'VALUE',
    appendBtnValue: true,
  },
  {
    viewValue: "-",
    type: 'OPERATION',
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: ".",
    type: 'VALUE',
    attributes: {
      buttonColor: "func",
      leftBtnRadius: true,
    },
    appendBtnValue: true,
  },
  {
    viewValue: "0",
    type: 'VALUE',
    appendBtnValue: true,
  },
  {
    viewValue: "=",
    type: 'EQUAL_OPERATION',
    attributes: {
      gridSpan: 2,
      buttonColor: "operation",
      rightBtnRadius: true,
    },
  },
];

export default CALCULATOR_BUTTONS_CONFIG;
