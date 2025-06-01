"use strict";
class addition {
    constructor() {
    }
    exe(a, b) {
        return a + b;
    }
}
class subtraction {
    constructor() {
    }
    exe(a, b) {
        return a - b;
    }
}
class multiplication {
    constructor() {
    }
    exe(a, b) {
        return a * b;
    }
}
class division {
    constructor() {
    }
    exe(a, b) {
        return a / b;
    }
}
class Calc {
    constructor(result = 0, lastResult = 0, opElement = document.getElementById('output'), op = null) {
        this.result = result;
        this.lastResult = lastResult;
        this.opElement = opElement;
        this.op = op;
    }
    updateOutput() {
        this.opElement.textContent = String(this.result);
    }
    clear() {
        this.result = 0;
        this.lastResult = 0;
        this.opElement.textContent = "Empty...";
    }
    setResult(numb) {
        this.result = this.result * 10 + numb;
        this.updateOutput();
    }
    setLastResult() {
        this.lastResult = this.result;
        this.result = 0;
    }
    add() {
        this.setLastResult();
        this.op = new addition();
        this.updateOutput();
    }
    sub() {
        this.setLastResult();
        this.op = new subtraction();
        this.updateOutput();
    }
    equal() {
        if (this.op) {
            this.result = this.op.exe(this.result, this.lastResult);
        }
        this.updateOutput();
    }
    backspace() {
        if (this.result < 10) {
            this.result = 0;
        }
        else {
            this.result = Math.floor(this.result / 10);
        }
        this.updateOutput();
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
        // Logik hier
    }
    static divide() {
        // Logik hier
    }
    static backspace() {
        this.calc.backspace();
    }
    static modulo() {
        // Logik hier
    }
    static power2() {
        // Logik hier
    }
    static root2() {
        // Logik hier
    }
    static flipNumber() {
        // Logik hier
    }
    static equal() {
        this.calc.equal();
    }
    static ce() {
        this.calc.clear();
    }
}
Btn.calc = new Calc;
