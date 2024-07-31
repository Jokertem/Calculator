const renderButtons = (Buttons, Keybord) => {
    Buttons.forEach((button) => {
        const newButton = document.createElement("button");
        newButton.innerText = button.Value;
        newButton.classList.add(button.Type);
        newButton.id = button.Value;
        Keybord.appendChild(newButton);
    });
};
export default renderButtons;
