import { ButtonsElement } from "./script.js";
const renderButtons = (Buttons, Keybord) => {
    Buttons.forEach((button) => {
        const newButton = document.createElement("button");
        newButton.innerText = button.Value;
        newButton.classList.add(button.Type);
        newButton.id = button.Value;
        Keybord.appendChild(newButton);
        ButtonsElement.push(newButton);
    });
};
export default renderButtons;
