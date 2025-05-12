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



function main()
{
    
}
class Calc {
  constructor(
    private result: number = 0,
    private lastResult: number = 0
  ) {}

  public updateOutput(): void {
    document.getElementById('output')!.textContent = String(this.result)
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
    // Logik hier
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
}

