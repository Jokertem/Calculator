import { IButton, buttonTypeEnum, buttonType } from "./types.js";

const renderButtons = (Buttons: IButton[], Keybord: HTMLDivElement) => {
  Buttons.forEach((button) => {
    const newButton = document.createElement("button");
    newButton.innerText = button.Value;
    newButton.classList.add(button.Type);
    newButton.id = button.Value;
    Keybord.appendChild(newButton);
  });
};
export default renderButtons;
