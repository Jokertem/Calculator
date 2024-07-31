import { buttonType, IButton, buttonTypeEnum } from "./types.js";
import renderButtons from "./renderButtons.js";
const calculatorNameContainer: HTMLSpanElement =
  document.querySelector(".Name");
const calulatorName = "Calculator by Jokertem";
calculatorNameContainer.innerText = calulatorName;

const Keybord: HTMLDivElement = document.querySelector(".keybord");

const Buttons: IButton[] = [
  {
    Value: "C",
    Type: buttonTypeEnum.CONTROL,
  },
  {
    Value: "DEL",
    Type: buttonTypeEnum.CONTROL,
  },
  {
    Value: "M-",
    Type: buttonTypeEnum.MEMORY,
  },
  {
    Value: "M+",
    Type: buttonTypeEnum.MEMORY,
  },
  {
    Value: "MR",
    Type: buttonTypeEnum.MEMORY,
  },
];
for (let index = 9; index > -1; index--) {
  const element: IButton = {
    Value: String(index),
    Type: buttonTypeEnum.NUMBER,
  };
  Buttons.push(element);
}
Buttons.push({ Value: ".", Type: buttonTypeEnum.NUMBER });

const operators: string[] = ["+", "-", "*", "/", "Pow"];

operators.forEach((element) => {
  const NewOperator: IButton = {
    Value: element,
    Type: buttonTypeEnum.OPERATOR,
  };
  Buttons.push(NewOperator);
});
renderButtons(Buttons, Keybord);

console.log(Keybord);
