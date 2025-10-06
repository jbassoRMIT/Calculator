const add=(a,b)=>{
    return (a+b);
}

const subtract=(a,b)=>{
    return (a-b);
}

const multiply=(a,b)=>{
    return (a*b);
}

const divide=(a,b)=>{
    return (a/b);
}

const operate=(a,b,operator)=>{
    if(operator=="+"){
        return add(a,b);
    }
    else if(operator=="-"){
        return subtract(a,b);
    }
    else if(operator=="x"){
        return multiply(a,b);
    }
    if(operator=="/"){
        return divide(a,b);
    }
}


    //Create functions that populate display
    //target number button elements
    const numberButtons=document.querySelectorAll(".numberButton");

    //create a variable to store the value entered into the screen
    let value1=0;
    let value2=0;

    //create a variable to store operation
    let operation="";

    //create boolean variable to store whether a result has been produced
    let isEvaluated=false;

    //iterate over the number buttons
    for(let button of numberButtons){
        //add event Listener to each button on click
        button.addEventListener("click",()=>{
            //on each click, target the calculator display div
            const display=document.querySelector(".calculatorDisplay");

            //create a num as the value of inherently of that button
            const num=button.textContent;

            //Check if an evaluation has already occurred, in that case, clear display content
            if(isEvaluated){
                display.textContent="";
                //reset value1 and value2
                value1=0;
                value2=0;
            }

            //append the num to displayDiv
            display.textContent+=num;

            //add the numeric value of num to value1 or value 2 depending on if an operation has been selected
            if(operation!=""){
                value2=Number(display.textContent);
            }
            else{
                value1=Number(display.textContent);
            }
            
            console.log(`value1: ${value1}`);
            console.log(`value2: ${value2}`);
        })
    }


//target operator buttons and add event listeners
const operatorButtons=document.querySelectorAll(".operatorButton");

let result=0;
//on each click, target the calculator display div
const display=document.querySelector(".calculatorDisplay");


//iterate over the operator buttons
for(let button of operatorButtons){
    //add event listener
    button.addEventListener("click",()=>{
        //by clicking this button, immplies you want to keepo calculating, so set isEvaluated to false
        isEvaluated=false;
        
        //check what type of button it is:
        operation=button.textContent;

        //we need 2 values to work with any operation, 
        // we can assume the user has already entered some number in the screen, push that to arrays value, then reset val to 0
        //Clear the contents of value
        display.textContent="";
        console.log(operation);
    })
}

//target equals button
const equalsButton=document.querySelector(".equalsButton");
equalsButton.addEventListener("click",()=>{
    //set isEvaluated to true
    isEvaluated=true;
    
    //conditional to check if value2==0 and operation==/
    if(value2==0 & operation=="/"){
        result="Sorry you cannot divide by 0";
        //reset values and reset operation
        value1=0;
        value2=0;
        operation="";
    }
    else{
        //set value1 to result, in case user wants to add operations
        result=operate(value1,value2,operation);
        value1=result;
    }
    display.textContent=result;

    //reset operation to empty string
    operation="";
})

//implement clear button functionality
const clearButton=document.querySelector(".clearButton");
clearButton.addEventListener("click",()=>{
    //clear text content, reset values and reset operation, and isEvaluatec to false
    display.textContent="";
    value1=0;
    value2=0;
    operation="";
    isEvaluated=false;
})