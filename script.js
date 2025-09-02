class Stack {
    constructor() { this.items = []; }

    // Push operation
    push(element) { this.items.push(element); }

    // Pop operation
    pop()
    {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek operation
    peek()
    {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // isEmpty operation
    isEmpty() { return this.items.length === 0; }

    // Size operation
    size() { return this.items.length; }

    // Print the stack
    print() { console.log(this.items); }
}

const numStack = new Stack();
const opStack = new Stack();

let userInput = ""
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let addSub = ["+", "-"];
let mulDiv = ["*", "/"];
let tokens = [];

document.getElementById("num1").onclick = function() {
    userInput += "1";
}
document.getElementById("num2").onclick = function() {
    userInput += "2";
}
document.getElementById("num3").onclick = function() {
    userInput += "3";
}   
document.getElementById("num4").onclick = function() {
    userInput += "4";
}
document.getElementById("num5").onclick = function() {
    userInput += "5";
}
document.getElementById("num6").onclick = function() {
    userInput += "6";
}
document.getElementById("num7").onclick = function() {
    userInput += "7";
}
document.getElementById("num8").onclick = function() {
    userInput += "8";
}
document.getElementById("num9").onclick = function() {
    userInput += "9";
}
document.getElementById("num0").onclick = function() {
    userInput += "0";
}

document.getElementById("dot").onclick = function() {
    userInput += ".";
}
document.getElementById("sub").onclick = function() {
    userInput += "-";
}
document.getElementById("mul").onclick = function() {
    userInput += "*";
}
document.getElementById("div").onclick = function() {
    userInput += "/";
}
document.getElementById("add").onclick = function() {
    userInput += "+";
}

document.getElementById("equal").onclick = function() {
    tokenizeInput(userInput);
    separateTokens(secArr);
    result = evaluate();
    document.getElementById("result").innerText = "result is " + result;
    clear();
}

//tokenize input
function tokenizeInput(userInput) {
    secArr = [];
    temp = "";
    for (i = 0; i < userInput.length; i++) {
        if (numbers.includes(userInput[i])) {
            temp += userInput[i];
        }
        else if (mulDiv.includes(userInput[i]) || addSub.includes(userInput[i])) {
            if (temp !== "") {
                secArr.push(temp);
                temp = "";
            }
            secArr.push(userInput[i]);
        }}
    if (temp !== "") {
        secArr.push(temp);
}}
//Separate tokens into numbers and operators
function separateTokens(secArr) {
    for (i= 0; i < secArr.length; i++) {
        let temp = !isNaN(secArr[i]);
        if (temp) {
            numStack.push(secArr[i]);
            temp = "";
        }
        else if(addSub.includes(secArr[i])) {
            opStack.push(secArr[i]);
        }
        else if(mulDiv.includes(secArr[i])) {
            opStack.push(secArr[i]);
    }
}
}

//Evaluate the expression

function evaluate() {
    while (opStack.size()>0){
        if (opStack.peek()=== "*" || opStack.peek()=== "/"){
            if (opStack.peek()=== "*"){
                temp = parseFloat(numStack.pop()) * parseFloat(numStack.pop());
                numStack.push(temp);
                opStack.pop();}
            else if (opStack.peek()=== "/"){
                tempVal = parseFloat(numStack.pop());
                temp = parseFloat(numStack.pop()) / tempVal;
                tempVal = 0;
                numStack.push(temp);
                opStack.pop();
            }

    }
        if (opStack.peek()=== "+" || opStack.peek()=== "-"){
            if (opStack.peek()=== "+"){
                temp = parseFloat(numStack.pop()) + parseFloat(numStack.pop());
                numStack.push(temp);
                opStack.pop();
            }
            else if (opStack.peek()=== "-"){
                tempVal = parseFloat(numStack.pop());
                temp = parseFloat(numStack.pop()) - tempVal;
                tempVal = 0;
                numStack.push(temp);
                opStack.pop();
        }
    }
}
    return temp;
}

//clear function
function clear() {
    userInput = "";
    secArr = [];
    while (!numStack.isEmpty()) {
        numStack.pop();
    }
    while (!opStack.isEmpty()) {
        opStack.pop();
    }}


