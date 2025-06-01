interface operation {

}

class addition implements operation {
  
}
class subtraction implements operation {

}
class multiplication implements operation {

}
class division implements operation {

}

class Calc {
  
  constructor(
    private result: number = 0,
    private lastResult: number = 0,
    private opElement: HTMLElement = document.getElementById('output')!
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
    this.updateOutput();
  }
  public equal(): void {
    this.result += this.lastResult;
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
    // Logik hier
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

