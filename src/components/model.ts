export type ButtonType =
  | "AC_OPERATION"
  | "DELETE_OPERATION"
  | "OPERATION"
  | "VALUE"
  | "CALCULATE_OPERATION";

export interface IButtonElement {
  viewValue: string;
  type: ButtonType;
  attributes?: {
    gridSpan?: number;
    buttonColor?: string;
    leftBtnRadius?: boolean;
    rightBtnRadius?: boolean;
  };
  appendBtnValue?: boolean;
}
