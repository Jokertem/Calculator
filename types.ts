export interface IButton {
  Value: string;
  Type: buttonType;
}
export type buttonType =
  | buttonTypeEnum.MEMORY
  | buttonTypeEnum.NUMBER
  | buttonTypeEnum.OPERATOR
  | buttonTypeEnum.CONTROL;
export enum buttonTypeEnum {
  MEMORY = "memory",
  NUMBER = "number",
  OPERATOR = "operator",
  CONTROL = "control",
}
