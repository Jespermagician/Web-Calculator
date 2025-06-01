"use strict";
class Calc {
    constructor(result = 0, lastResult = 0, opElement = document.getElementById('output')) {
        this.result = result;
        this.lastResult = lastResult;
        this.opElement = opElement;
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
        this.updateOutput();
    }
    equal() {
        this.result += this.lastResult;
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
        // Logik hier
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
