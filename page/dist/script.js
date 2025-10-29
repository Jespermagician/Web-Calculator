"use strict";
class addition {
    constructor() {
        this.symbol = "+";
    }
    exe(a, b) {
        return a + b;
    }
}
class subtraction {
    constructor() {
        this.symbol = "-";
    }
    exe(a, b) {
        return a - b;
    }
}
class multiplication {
    constructor() {
        this.symbol = "X";
    }
    exe(a, b) {
        return a * b;
    }
}
class division {
    constructor() {
        this.symbol = "/";
    }
    exe(a, b) {
        return a / b;
    }
}
class modulo {
    constructor() {
        this.symbol = "%";
    }
    exe(a, b) {
        return a % b;
    }
}
class wolfram {
    constructor() {
        this.symbol = "";
    }
    exe(a) {
        return 1 / a;
    }
}
class root2 {
    constructor() {
        this.symbol = "";
    }
    exe(a) {
        // return a / a;
        return Math.pow(a, 0.5);
    }
}
class power2 {
    constructor() {
        this.symbol = "";
    }
    exe(a) {
        return a * a;
    }
}
class flipNumber {
    constructor() {
        this.symbol = "";
    }
    exe(a) {
        return a * -1;
    }
}
class Calc {
    constructor(result = 0, lastResult = 0, opElement = document.getElementById('output'), symbolElement = document.getElementById('operation'), op = null, lastNumEl = document.getElementById('lastNumber'), currNumEl = document.getElementById('currentNumber'), decimalState = 0) {
        this.result = result;
        this.lastResult = lastResult;
        this.opElement = opElement;
        this.symbolElement = symbolElement;
        this.op = op;
        this.lastNumEl = lastNumEl;
        this.currNumEl = currNumEl;
        this.decimalState = decimalState;
    }
    operate(op) {
        if (this.decimalState !== 0) {
            this.decimalState = 0;
        }
        console.log("type " + typeof op);
        return new op;
    }
    updateOutput(clearSym) {
        console.log("test");
        this.opElement.textContent = String(this.result);
        console.log("test");
        if (this.op && this.op.symbol) {
            if (!clearSym)
                this.symbolElement.textContent = this.op.symbol;
            else
                this.symbolElement.textContent = "";
        }
        else
            this.symbolElement.textContent = "";
        this.debug();
    }
    debug() {
        this.lastNumEl.textContent = String(this.lastResult);
        this.currNumEl.textContent = String(this.result);
    }
    clear() {
        this.result = 0;
        this.lastResult = 0;
        this.decimalState = 0;
        this.opElement.textContent = "Empty...";
        this.symbolElement.textContent = "";
    }
    setZero() {
        this.result = 0;
        this.updateOutput(false);
        this.decimalState = 0;
    }
    setResult(numb) {
        if (this.decimalState > 0) {
            if (this.decimalState >= 10)
                return;
            this.result = this.result + (numb / power(10, this.decimalState));
            this.decimalState += 1;
            console.log("this.decimalState " + this.decimalState);
            this.updateOutput(false);
        }
        else {
            this.result = this.result * 10 + numb;
            this.updateOutput(false);
        }
    }
    setLastResult() {
        this.lastResult = this.result;
        this.result = 0;
    }
    add() {
        this.setLastResult();
        this.op = this.operate(addition);
        this.updateOutput(false);
    }
    sub() {
        this.setLastResult();
        this.op = this.operate(subtraction);
        this.updateOutput(false);
    }
    multi() {
        this.setLastResult();
        this.op = this.operate(multiplication);
        this.updateOutput(false);
    }
    div() {
        this.setLastResult();
        this.op = this.operate(division);
        this.updateOutput(false);
    }
    modulo() {
        this.setLastResult();
        this.op = this.operate(modulo);
        this.updateOutput(false);
    }
    equal() {
        if (this.op) {
            this.decimalState = 0;
            console.log("lastResult: " + this.lastResult);
            console.log("result: " + this.result);
            let temp = this.result;
            this.result = this.op.exe(this.lastResult, this.result);
            this.lastResult = temp;
        }
        this.updateOutput(true);
    }
    backspace() {
        if (this.result < 10) {
            this.result = 0;
        }
        else {
            this.result = Math.floor(this.result / 10);
        }
        this.updateOutput(true);
    }
    root2() {
        this.op = this.operate(root2);
        this.result = this.op.exe(this.result, 0);
        this.updateOutput(true);
    }
    power2() {
        this.op = this.operate(power2);
        this.result = this.op.exe(this.result, 0);
        this.updateOutput(true);
    }
    wolfram() {
        this.op = this.operate(wolfram);
        this.result = this.op.exe(this.result, 0);
        this.updateOutput(true);
    }
    flipNumber() {
        this.op = this.operate(flipNumber);
        this.result = this.op.exe(this.result, 0);
        this.updateOutput(true);
    }
    decimal() {
        if (this.decimalState <= 0) {
            this.decimalState = 1;
            this.opElement.textContent = String(this.result) + ".";
        }
    }
}
class Btn {
    static number(numb) {
        this.calc.setResult(numb);
    }
    static add() {
        this.calc.add();
    }
    static substract() {
        this.calc.sub();
    }
    static multiply() {
        this.calc.multi();
    }
    static divide() {
        this.calc.div();
    }
    static backspace() {
        this.calc.backspace();
    }
    static modulo() {
        this.calc.modulo();
    }
    static power2() {
        this.calc.power2();
    }
    static root2() {
        this.calc.root2();
    }
    // + / - ig 
    static flipNumber() {
        this.calc.flipNumber();
    }
    static equal() {
        this.calc.equal();
    }
    static ce() {
        this.calc.clear();
    }
    static c() {
        this.calc.setZero();
    }
    static wolfram() {
        this.calc.wolfram();
    }
    static decimal() {
        this.calc.decimal();
    }
}
Btn.calc = new Calc;
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#numpad .btn')
        .forEach(btn => btn.addEventListener('click', () => console.log(btn.textContent)));
});
function power(val, pow) {
    if (pow === 0)
        return 1;
    let sol = val;
    for (let i = 0; i < pow - 1; i++) {
        sol *= val;
    }
    console.log({ sol });
    return sol;
}
