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
    else if(operator=="*"){
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
    let value=0;

    //iterate over the number buttons
    for(let button of numberButtons){
        //add event Listener to each button on click
        button.addEventListener("click",()=>{
            //on each click, target the calculator display div
            const display=document.querySelector(".calculatorDisplay");

            //create a num as the value of inherently of that button
            const num=button.textContent;

            //append the num to displayDiv
            display.textContent+=num;

            //add the numeric value of num to value;
            value=Number(display.textContent);
            console.log(value);
        })
    }


//target operator buttons and add event listeners
const operatorButtons=document.querySelectorAll(".operatorButton");

//create an array to store the values
let values=[]

let result=0;
//on each click, target the calculator display div
const display=document.querySelector(".calculatorDisplay");


//iterate over the operator buttons
for(let button of operatorButtons){
    //add event listener
    button.addEventListener("click",()=>{
        //check what type of button it is:
        const operator=button.textContent;

        //we need 2 values to work with any operation, 
        // we can assume the user has already entered some number in the screen, push that to arrays value, then reset val to 0
        //Clear the contents of value
        values.push(value);
        display.textContent="";
        value=0;

        //Can only run the calculator ops if values is of length 2:
        if(values.length==2){
            if(operator=="+"){
                result=add(values[0],values[1]);
                console.log(result);
            }
        }
    })
}

//target equals button
const equalsButton=document.querySelector(".equalsButton");
equalsButton.addEventListener("click",()=>{
    display.textContent=result;
    console.log(values);
})