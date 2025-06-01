interface operation {
  exe(a:number, b:number): number;
}

class addition implements operation {
  constructor() {
  }
  exe(a: number, b: number) {
    return a + b;
  }
}
class subtraction implements operation {
  constructor() {
  }
  exe(a: number, b: number) {
    return a - b;
  }
  
}
class multiplication implements operation {
  constructor() {
  }
  exe(a: number, b: number) {
    return a * b;
  }
  
}
class division implements operation {
  constructor() {
  }
  exe(a: number, b: number) {
    return a / b;
  }

}

class Calc {
  
  constructor(
    private result: number = 0,
    private lastResult: number = 0,
    private opElement: HTMLElement = document.getElementById('output')!,
    private op: operation | null = null, 
  ) {}

  public updateOutput(): void {
    this.opElement.textContent = String(this.result)
  }
  public clear(): void {
    this.result = 0;
    this.lastResult = 0;
    this.opElement.textContent = "Empty..."
  }
  

  public setResult(numb: number): void {
    this.result = this.result * 10 + numb;
    this.updateOutput();
  }
  private setLastResult(): void {
    this.lastResult = this.result;
    this.result = 0;
  }
  public add(): void {
    this.setLastResult();
    this.op = new addition();
    this.updateOutput();
  }
  public sub(): void {
    this.setLastResult();
    this.op = new subtraction();
    this.updateOutput();
  }
  public equal(): void {
    if(this.op) {
      this.result = this.op.exe(this.result, this.lastResult);
    }
    this.updateOutput();
  }
  public backspace(): void {
    if(this.result < 10) {
      this.result = 0;
    } else {
      this.result = Math.floor(this.result / 10);
    }
    this.updateOutput()
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
    // Logik hier
  }

  public static divide(): void {
    // Logik hier
  }

  public static backspace(): void {
    this.calc.backspace()
  }

  public static modulo(): void {
    // Logik hier
  }

  public static power2(): void {
    // Logik hier
  }

  public static root2(): void {
    // Logik hier
  }

  public static flipNumber(): void {
    // Logik hier
  }

  public static equal(): void {
    this.calc.equal();
  }

  public static ce(): void {
    this.calc.clear();
  }
}

