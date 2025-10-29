interface operation {
  exe(a:number, b:number): number;
  symbol: string | null;
}

class addition implements operation {
  constructor() {
  }
  symbol: string = "+";
  exe(a: number, b: number) {
    return a + b;
  }
}
class subtraction implements operation {
  constructor() {
  }
  symbol = "-";
  exe(a: number, b: number) {
    return a - b;
  } 
}
class multiplication implements operation {
  constructor() {
  }
  symbol = "X";
  exe(a: number, b: number) {
    return a * b;
  }
  
}
class division implements operation {
  constructor() {
  }
  symbol = "/";
  exe(a: number, b: number) {
    return a / b;
  }
}
class modulo implements operation {
  constructor() {
  }
  symbol = "%";
  exe(a: number, b: number) {
    return a % b;
  }
}
class wolfram implements operation {
  constructor() {
  }
  symbol = "";
  exe(a: number) {
    return 1 / a;
  }
}
class root2 implements operation {
  constructor() {
  }
  symbol = "";
  exe(a: number) {
    // return a / a;
    return Math.pow(a, 0.5);
  }
}
class power2 implements operation {
  constructor() {
  }
  symbol = "";
  exe(a: number) {
    return a * a;
  }
}
class flipNumber implements operation {
  constructor() {
  }
  symbol = "";
  exe(a: number) {
    return a * -1;
  }
}

class Calc {
  constructor(
    private result: number = 0,
    private lastResult: number = 0,
    private opElement: HTMLElement = document.getElementById('output')!,
    private symbolElement: HTMLElement = document.getElementById('operation')!,
    private op: operation | null = null, 
    private lastNumEl: HTMLElement = document.getElementById('lastNumber')!,
    private currNumEl: HTMLElement = document.getElementById('currentNumber')!,
    private decimalState: number = 0
  ) {}
  private operate(op: any): operation {
    if(this.decimalState !== 0) {
      this.decimalState = 0;
    }
    console.log("type " + typeof op)
    return new op;
  }

  public updateOutput(clearSym: boolean): void {
    console.log("test")
    this.opElement.textContent = String(this.result)
    console.log("test")
    if(this.op && this.op.symbol) {
      if(!clearSym)
        this.symbolElement.textContent = this.op.symbol;
      else 
        this.symbolElement.textContent = "";
    }
    else
      this.symbolElement.textContent = "";

    this.debug();
  }
  public debug(): void {
    this.lastNumEl.textContent = String(this.lastResult);
    this.currNumEl.textContent = String(this.result);
  }

  public clear(): void {
    this.result = 0;
    this.lastResult = 0;
    this.decimalState = 0;
    this.opElement.textContent = "Empty..."
    this.symbolElement.textContent = "";
  }
  public setZero(): void {
    this.result = 0;
    this.updateOutput(false);
    this.decimalState = 0;
  }

  public setResult(numb: number): void {
    if(this.decimalState > 0) {
      if(this.decimalState >=  10)
        return
      this.result = this.result + (numb / power(10, this.decimalState));
      this.decimalState += 1;
      console.log("this.decimalState "  + this.decimalState)
      this.updateOutput(false);
    } else {
      this.result = this.result * 10 + numb;
      this.updateOutput(false);
    }
  }
  private setLastResult(): void {
    this.lastResult = this.result;
    this.result = 0;
  }
  public add(): void {
    this.setLastResult();
    this.op = this.operate(addition)
    this.updateOutput(false);
  }
  public sub(): void {
    this.setLastResult();
    this.op = this.operate(subtraction)
    this.updateOutput(false);
  }
  public multi(): void {
    this.setLastResult();
    this.op = this.operate(multiplication)
    this.updateOutput(false);
  }
  public div(): void {
    this.setLastResult();
    this.op = this.operate(division)
    this.updateOutput(false);
    
  }
  public modulo(): void {
    this.setLastResult();
    this.op = this.operate(modulo)
    this.updateOutput(false);
  }
  public equal(): void {
    if(this.op) {
      this.decimalState = 0;
      console.log("lastResult: " + this.lastResult);
      console.log("result: " + this.result);
      let temp: number = this.result;
      this.result = this.op.exe(this.lastResult, this.result);
      this.lastResult = temp;
    }
    this.updateOutput(true);
  }
  public backspace(): void {
    if(this.result < 10) {
      this.result = 0;
    } else {
      this.result = Math.floor(this.result / 10);
    }
    this.updateOutput(true)
  }
  public root2(): void {
    this.op = this.operate(root2)
    this.result = this.op.exe(this.result, 0)
    this.updateOutput(true)
  }
  public power2(): void {
    this.op = this.operate(power2)
    this.result = this.op.exe(this.result, 0)
    this.updateOutput(true)
  }

  public wolfram(): void {
    this.op = this.operate(wolfram)
    this.result = this.op.exe(this.result, 0)
    this.updateOutput(true)
  }

  public flipNumber(): void {
    this.op = this.operate(flipNumber)
    this.result = this.op.exe(this.result, 0)
    this.updateOutput(true)
  }

  public decimal(): void {
    if(this.decimalState <= 0) {
      this.decimalState = 1;
      this.opElement.textContent = String(this.result) + "."
    }
  }
}




class Btn {
  private static calc: Calc = new Calc;

  public static number(numb: number): void {
    this.calc!.setResult(numb);
  }

  public static add(): void {
    this.calc.add();
  }

  public static substract(): void {
    this.calc.sub();
  }

  public static multiply(): void {
    this.calc.multi();
  }

  public static divide(): void {
    this.calc.div();
  }

  public static backspace(): void {
    this.calc.backspace()
  }

  public static modulo(): void {
    this.calc.modulo();
  }

  public static power2(): void {
    this.calc.power2();
  }

  public static root2(): void {
    this.calc.root2();
  }

  // + / - ig 
  public static flipNumber(): void {
    this.calc.flipNumber();
  }

  public static equal(): void {
    this.calc.equal();
  }

  public static ce(): void {
    this.calc.clear();
  }

  public static c(): void {
    this.calc.setZero();
  }

  public static wolfram(): void {
    this.calc.wolfram();
  }

  public static decimal(): void {
    this.calc.decimal();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll<HTMLButtonElement>('#numpad .btn')
    .forEach(btn =>
      btn.addEventListener('click', () =>
        console.log(btn.textContent)
      )
    );
});


function power(val: number, pow: number): number {
  if (pow === 0) 
    return 1;
  let sol = val;
  for (let i = 0; i < pow - 1; i++) {
    sol *= val;
  }
  console.log({sol})
  return sol;
}