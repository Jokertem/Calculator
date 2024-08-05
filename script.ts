import { buttonType, IButton, buttonTypeEnum } from "./types.js";
import renderButtons from "./renderButtons.js";

const calculatorNameContainer: HTMLSpanElement =
  document.querySelector(".Name");
const calulatorName = "Calculator by Jokertem";
calculatorNameContainer.innerText = calulatorName;

const MemoryElement: HTMLSpanElement = document.querySelector("#valueM");
const Value1Element: HTMLSpanElement = document.querySelector("#value1");
const Value2Element: HTMLSpanElement = document.querySelector("#value2");

let MemoryValue = 0;


Value1Element.innerText = "";
Value2Element.innerText = "0";

let Value1 = ""
let Value2:string |number = ""


let Opereator = ""


const updateScreen=()=>{
  MemoryElement.innerText = `M=${MemoryValue}`
  Value1Element.innerText = `${Value1} ${Opereator}`
  Value2Element.innerText = Value2;

}

const Clear=(){

 Value1 = ""
 Value2 = "0"
 Value1Element.innerText = Value1;
 Value2Element.innerText = Value2;
 Opereator=""


}
Clear();



const Keybord: HTMLDivElement = document.querySelector(".keys");

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
   {
    Value: "MC",
    Type: buttonTypeEnum.MEMORY,
  },
];  


export const ButtonsElement:HTMLButtonElement[] =[]


for (let index = 9; index > -1; index--) {
  const element: IButton = {
    Value: String(index),
    Type: buttonTypeEnum.NUMBER,
  };
  Buttons.push(element);
}
Buttons.push({ Value: ".", Type: buttonTypeEnum.NUMBER });
Buttons.push({ Value: "+/-", Type: buttonTypeEnum.NUMBER });

const operators: string[] = ["+", "-", "*", "/", "√"];

operators.forEach((element) => {
  const NewOperator: IButton = {
    Value: element,
    Type: buttonTypeEnum.OPERATOR,
  };
  Buttons.push(NewOperator);
});

Buttons.push({Value:"=",Type:buttonTypeEnum.CONTROL})
renderButtons(Buttons, Keybord);


//render Click Numbers
ButtonsElement.forEach(button => {
  if (button.classList.contains(buttonTypeEnum.NUMBER)&& button.id !="+/-") {
    if (button.id ==".") {
      button.addEventListener("click",()=>{
        if (Value2.charAt(1,Value2.length-1)==".") {
          return
        }
        Value2 +=button.innerText
        updateScreen()
       
      })
    }
    else{
      button.addEventListener("click",()=>{
        if (Value2.length >=18) {
          return
        }
        if (Value2 == "0") {
          Value2 =button.innerText
        }
        else{
          Value2 +=button.innerText
        }
        updateScreen()
      })
    }
   
  }
});
// Render Plus and Minus Click
ButtonsElement.forEach(button => {
  if (button.id =="+/-") {
    button.addEventListener("click",()=>{
      if (Value2.substring(0,1)!="-") {
        Value2 = Value2.replace(Value2,`-${Value2}`)
      }
      else{
        Value2 = Value2.substring(1)
        
      }
    
     updateScreen()
    })
  }
});

// Render Click Clear and Delete
ButtonsElement.forEach(button => {
  if (button.classList.contains(buttonTypeEnum.CONTROL)) {
    if (button.id =="C") {
      button.addEventListener("click",Clear)
    }
    else if (button.id =="DEL") {
      button.addEventListener("click",()=>{
        Value2 = Value2.substring(0, Value2.length - 1);
        if (Value2 =="") {
        Value2 = "0"
        }
        updateScreen()
      })
      
    }
  }
});

//Render Click Opereator
ButtonsElement.forEach(button => {
 
  if (button.classList.contains(buttonTypeEnum.OPERATOR )&& button.id !="√") {
    button.addEventListener("click",()=>{
      if (Opereator !="" && Value2 =="0") {
        Opereator = button.id
        updateScreen()
        return
      }
      Opereator = button.id
      Value1 = `${Value2}`      
      Value2 = "0"
      
      updateScreen()
    })
  }
  else if (button.id =="√") {
    button.addEventListener("click",()=>{
      Value2 = Math.sqrt(Number(Value2))
      updateScreen()
    })
  }
   
  
});

//Render Click Equal
ButtonsElement.forEach(button => {
  if (button.id =="=") {
    button.addEventListener("click",()=>EqualTo(Value1,Value2))
    
  }
});
const EqualTo =(V1:string,V2:string|number)=>{
 
 
  switch (Opereator) {
    case operators[0]:
      Value2 = Number(Value1)+Number(Value2);
      break;
      case operators[1]:
        Value2 = Number(Value1)-Number(Value2);
        break;
        case operators[2]:
        Value2 = Number(Value1)*Number(Value2);
        break;
        case operators[3]:
        Value2 = Number(Value1)/Number(Value2);
        break;
    default:
      break;
  }
  
  updateScreen();
}

//render Click Memory
ButtonsElement.forEach(button => {
  if (button.id =="M-") {
    button.addEventListener("click",()=>{
      MemoryValue -= Number(Value2)
      updateScreen()
    })
    
  }
  else if(button.id =="M+"){
    button.addEventListener("click",()=>{
      MemoryValue += Number(Value2)
      updateScreen()
    })
  }
  else if(button.id =="MR"){
    button.addEventListener("click",()=>{
      Value2 = MemoryValue
      updateScreen()
    })
  }
  else if(button.id =="MC"){
    button.addEventListener("click",()=>{
    MemoryValue = 0
      updateScreen()
    })
  }
});