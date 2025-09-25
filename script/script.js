var addition = /** @class */ (function () {
    function addition() {
        this.symbol = "+";
    }
    addition.prototype.exe = function (a, b) {
        return a + b;
    };
    return addition;
}());
var subtraction = /** @class */ (function () {
    function subtraction() {
        this.symbol = "-";
    }
    subtraction.prototype.exe = function (a, b) {
        return a - b;
    };
    return subtraction;
}());
var multiplication = /** @class */ (function () {
    function multiplication() {
        this.symbol = "*";
    }
    multiplication.prototype.exe = function (a, b) {
        return a * b;
    };
    return multiplication;
}());
var division = /** @class */ (function () {
    function division() {
        this.symbol = "/";
    }
    division.prototype.exe = function (a, b) {
        return a / b;
    };
    return division;
}());
var modulo = /** @class */ (function () {
    function modulo() {
        this.symbol = "%";
    }
    modulo.prototype.exe = function (a, b) {
        return a % b;
    };
    return modulo;
}());
var Calc = /** @class */ (function () {
    function Calc(result, lastResult, opElement, symbolElement, op, lastNumEl, currNumEl) {
        if (result === void 0) { result = 0; }
        if (lastResult === void 0) { lastResult = 0; }
        if (opElement === void 0) { opElement = document.getElementById('output'); }
        if (symbolElement === void 0) { symbolElement = document.getElementById('operation'); }
        if (op === void 0) { op = null; }
        if (lastNumEl === void 0) { lastNumEl = document.getElementById('lastNumber'); }
        if (currNumEl === void 0) { currNumEl = document.getElementById('currentNumber'); }
        this.result = result;
        this.lastResult = lastResult;
        this.opElement = opElement;
        this.symbolElement = symbolElement;
        this.op = op;
        this.lastNumEl = lastNumEl;
        this.currNumEl = currNumEl;
    }
    Calc.prototype.updateOutput = function (clearSym) {
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
    };
    Calc.prototype.debug = function () {
        this.lastNumEl.textContent = String(this.lastResult);
        this.currNumEl.textContent = String(this.result);
    };
    Calc.prototype.clear = function () {
        this.result = 0;
        this.lastResult = 0;
        this.opElement.textContent = "Empty...";
        this.symbolElement.textContent = "";
    };
    Calc.prototype.setZero = function () {
        this.result = 0;
        this.updateOutput(false);
    };
    Calc.prototype.setResult = function (numb) {
        this.result = this.result * 10 + numb;
        this.updateOutput(false);
    };
    Calc.prototype.setLastResult = function () {
        this.lastResult = this.result;
        this.result = 0;
    };
    Calc.prototype.add = function () {
        this.setLastResult();
        this.op = new addition();
        this.updateOutput(false);
    };
    Calc.prototype.sub = function () {
        this.setLastResult();
        this.op = new subtraction();
        this.updateOutput(false);
    };
    Calc.prototype.multi = function () {
        this.setLastResult();
        this.op = new multiplication();
        this.updateOutput(false);
    };
    Calc.prototype.div = function () {
        this.setLastResult();
        this.op = new division();
        this.updateOutput(false);
    };
    Calc.prototype.modulo = function () {
        this.setLastResult();
        this.op = new modulo();
        this.updateOutput(false);
    };
    Calc.prototype.equal = function () {
        if (this.op) {
            console.log("lastResult: " + this.lastResult);
            console.log("result: " + this.result);
            var temp = this.result;
            this.result = this.op.exe(this.lastResult, this.result);
            this.lastResult = temp;
        }
        this.updateOutput(true);
    };
    Calc.prototype.backspace = function () {
        if (this.result < 10) {
            this.result = 0;
        }
        else {
            this.result = Math.floor(this.result / 10);
        }
        this.updateOutput(true);
    };
    return Calc;
}());
var Btn = /** @class */ (function () {
    function Btn() {
    }
    Btn.number = function (numb) {
        this.calc.setResult(numb);
    };
    Btn.add = function () {
        this.calc.add();
    };
    Btn.substract = function () {
        this.calc.sub();
    };
    Btn.multiply = function () {
        this.calc.multi();
    };
    Btn.divide = function () {
        this.calc.div();
    };
    Btn.backspace = function () {
        this.calc.backspace();
    };
    Btn.modulo = function () {
        this.calc.modulo();
    };
    Btn.power2 = function () {
        // implement later
    };
    Btn.root2 = function () {
        // implement later
    };
    Btn.flipNumber = function () {
        // implement later
    };
    Btn.equal = function () {
        this.calc.equal();
    };
    Btn.ce = function () {
        this.calc.clear();
    };
    Btn.c = function () {
        this.calc.setZero();
    };
    Btn.calc = new Calc;
    return Btn;
}());
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#numpad .btn')
        .forEach(function (btn) {
        return btn.addEventListener('click', function () {
            return console.log(btn.textContent);
        });
    });
});
