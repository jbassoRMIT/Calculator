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
//target button elements
const buttons=document.querySelectorAll("button");

//iterate over the buttons
for(let button of buttons){
    //add event Listener to each button on click
    button.addEventListener("click",()=>{
        //on each click, target the calculator display div
        const display=document.querySelector(".calculatorDisplay");

        //create a num as the value of inherently of that button
        const num=button.textContent;

        //append the num to displayDiv
        display.textContent+=num;
    })
}