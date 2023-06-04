// viewValue what we see in UI, also like a "key" attribute
// appendBtnValue if btn must change the number, that use this filed, also used in condition for func in component
// attributes it's an object, where all attribute which btn have. WARNING use with spread operator {...attributes}
// type. Type of btn, is that value or operator or func
// keyValue value which need for operation

const CALCULATOR_BUTTONS_CONFIG = [
  {
    viewValue: "AC",
    type: 'AC',
    keyValue: "",
    attributes: {
      gridSpan: 2,
      buttonColor: "func",
    },
  },
  {
    viewValue: "DEL",
    type: 'DELETE',
    keyValue: "",
    attributes: {
      buttonColor: "func",
    },
    delete: true
  },
  {
    viewValue: "÷",
    attributes: {
      buttonColor: "operation",
    },
  },
  {
    viewValue: "7",
    type: 'VALUE',
    keyValue: "7",
    appendBtnValue: true,
  },
  {
    viewValue: "8",
    type: 'VALUE',
    keyValue: "8",
    appendBtnValue: true,
  },
  {
    viewValue: "9",
    type: 'VALUE',
    keyValue: "9",
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
    type: 'VALUE',
    keyValue: "4",
    appendBtnValue: true,
  },
  {
    viewValue: "5",
    type: 'VALUE',
    keyValue: "5",
    appendBtnValue: true,
  },
  {
    viewValue: "6",
    type: 'VALUE',
    keyValue: "6",
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
    type: 'VALUE',
    keyValue: "1",
    appendBtnValue: true,
  },
  {
    viewValue: "2",
    type: 'VALUE',
    keyValue: "2",
    appendBtnValue: true,
  },
  {
    viewValue: "3",
    type: 'VALUE',
    keyValue: "3",
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
    type: 'VALUE',
    keyValue: ".",
    attributes: {
      buttonColor: "func",
      leftBtnRadius: true,
    },
    appendBtnValue: true,
  },
  {
    viewValue: "0",
    type: 'VALUE',
    keyValue: "0",
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
