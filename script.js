import { buttonTypeEnum } from "./types.js";
import renderButtons from "./renderButtons.js";
const calculatorNameContainer = document.querySelector(".Name");
const calulatorName = "Calculator by Jokertem";
calculatorNameContainer.innerText = calulatorName;
const Keybord = document.querySelector(".keybord");
const Buttons = [
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
    const element = {
        Value: String(index),
        Type: buttonTypeEnum.NUMBER,
    };
    Buttons.push(element);
}
Buttons.push({ Value: ".", Type: buttonTypeEnum.NUMBER });
const operators = ["+", "-", "*", "/", "Pow"];
operators.forEach((element) => {
    const NewOperator = {
        Value: element,
        Type: buttonTypeEnum.OPERATOR,
    };
    Buttons.push(NewOperator);
});
renderButtons(Buttons, Keybord);
console.log(Keybord);
