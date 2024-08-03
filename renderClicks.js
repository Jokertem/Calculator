import { ButtonsElement } from "./script";
import { buttonTypeEnum } from "./types";
const renderClicks = (Value2, updateScreen, Restart) => {
    // Render Click Clear and Delete
    ButtonsElement.forEach((button) => {
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
};
export default renderClicks;
