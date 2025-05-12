"use strict";
// document.addEventListener('DOMContentLoaded', function() 
// {
//     const btns = document.querySelectorAll('#numpad .btn'); 
//     btns.forEach(btn => {
//       // Fügen Sie hier Event-Listener für jeden Button hinzu
//       btn.addEventListener('click', function() 
//       {
//         // Logik für den Button-Klick hier
//         console.log(btn.textContent); // Zeigt den Textinhalt des geklickten Buttons an
//       });
//     });
//   });
function main() {
}
class Calc {
    constructor(result = 0, lastResult = 0) {
        this.result = result;
        this.lastResult = lastResult;
    }
    updateOutput() {
        document.getElementById('output').textContent = String(this.result);
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
        // Logik hier
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
}
Btn.calc = new Calc;
