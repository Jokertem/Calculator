import { buttonTypeEnum } from "./types.js";
import renderButtons from "./renderButtons.js";
const calculatorNameContainer = document.querySelector(".Name");
const calulatorName = "Calculator by Jokertem";
calculatorNameContainer.innerText = calulatorName;
const MemoryElement = document.querySelector("#valueM");
const Value1Element = document.querySelector("#value1");
const Value2Element = document.querySelector("#value2");
let MemoryValue = 0;
let MemoryText = `M = ${MemoryValue}`;
MemoryElement.innerText = MemoryText;
Value1Element.innerText = "";
Value2Element.innerText = "0";
let Value1 = "";
let Value2 = "";
let Opereator = "";
const updateScreen = () => {
    MemoryElement.innerText = MemoryText;
    Value1Element.innerText = `${Value1} ${Opereator}`;
    Value2Element.innerText = Value2;
};
const Restart = () => {
    MemoryValue = 0;
    MemoryText = `M = ${MemoryValue}`;
    MemoryElement.innerText = MemoryText;
    Value1 = "";
    Value2 = "0";
    MemoryText = `M = ${MemoryValue}`;
    Value1Element.innerText = Value1;
    Value2Element.innerText = Value2;
    Opereator = "";
};
Restart();
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
export const ButtonsElement = [];
for (let index = 9; index > -1; index--) {
    const element = {
        Value: String(index),
        Type: buttonTypeEnum.NUMBER,
    };
    Buttons.push(element);
}
Buttons.push({ Value: ".", Type: buttonTypeEnum.NUMBER });
const operators = ["+", "-", "*", "/"];
operators.forEach((element) => {
    const NewOperator = {
        Value: element,
        Type: buttonTypeEnum.OPERATOR,
    };
    Buttons.push(NewOperator);
});
Buttons.push({ Value: "=", Type: buttonTypeEnum.CONTROL });
renderButtons(Buttons, Keybord);
//render Click Numbers
ButtonsElement.forEach(button => {
    if (button.classList.contains(buttonTypeEnum.NUMBER)) {
        if (button.id == ".") {
            button.addEventListener("click", () => {
                if (Value2.charAt(1, Value2.length - 1) == ".") {
                    return;
                }
                Value2 += button.innerText;
                updateScreen();
            });
        }
        else {
            button.addEventListener("click", () => {
                if (Value2.length >= 18) {
                    return;
                }
                if (Value2 == "0") {
                    Value2 = button.innerText;
                }
                else {
                    Value2 += button.innerText;
                }
                updateScreen();
            });
        }
    }
});
// Render Click Clear and Delete
ButtonsElement.forEach(button => {
    if (button.classList.contains(buttonTypeEnum.CONTROL)) {
        if (button.id == "C") {
            button.addEventListener("click", Restart);
        }
        else if (button.id == "DEL") {
            button.addEventListener("click", () => {
                Value2 = Value2.substring(0, Value2.length - 1);
                if (Value2 == "") {
                    Value2 = "0";
                }
                updateScreen();
            });
        }
    }
});
//Render Click Opereator
ButtonsElement.forEach(button => {
    if (button.classList.contains(buttonTypeEnum.OPERATOR)) {
        button.addEventListener("click", () => {
            Opereator = button.id;
            Value1 = `${Value2}`;
            Value2 = "0";
            Opereator = button.id;
            updateScreen();
        });
    }
});
//Render Click Equal
ButtonsElement.forEach(button => {
    if (button.id == "=") {
        button.addEventListener("click", () => EqualTo(Value1, Value2));
    }
});
const EqualTo = (V1, V2) => {
    switch (Opereator) {
        case operators[0]:
            Value2 = Number(Value1) + Number(Value2);
            break;
        case operators[1]:
            Value2 = Number(Value1) - Number(Value2);
            break;
        case operators[2]:
            Value2 = Number(Value1) * Number(Value2);
            break;
        case operators[3]:
            Value2 = Number(Value1) / Number(Value2);
            break;
        default:
            break;
    }
    updateScreen();
};
