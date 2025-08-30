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

let userNum;
const stack = new Stack();

document.getElementById("num1").onclick = function() {
    stack.push("1");
}


document.getElementById("num2").onclick = function() {
    stack.push("2");
}

document.getElementById("add").onclick = function() {
    stack.push("+");
}

document.getElementById("equal").onclick = function() {
    alert(intJoiner() + stack.pop() + intJoiner());
    }

// Helper function to evaluate the expression
let ops = ["+", "-", "*", "/"];
function intJoiner(){
    let str = "";
    let size = stack.size();
    for (let i = 0; i < size; i++) {
        if (ops.includes(stack.peek())) {
            break
        }
        str += stack.pop();
    }
    return parseInt(str.split("").reverse().join(""));
}

