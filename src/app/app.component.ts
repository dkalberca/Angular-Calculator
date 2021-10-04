import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-angular';

  num1 = 0;
  num2 = 0;
  result = 0;

  add(){
    this.result = (this.num1 + this.num2);
    let finalResult = document.getElementById("result") as HTMLInputElement;
    finalResult.valueAsNumber = this.result;
  }

  minus(){
    this.result = (this.num1 - this.num2);
    let finalResult = document.getElementById("result") as HTMLInputElement;
    finalResult.valueAsNumber = this.result;
  }

  multiply(){
    this.result = (this.num1 * this.num2);
    let finalResult = document.getElementById("result") as HTMLInputElement;
    finalResult.valueAsNumber = this.result;
  }

  divide(){
    this.result = (this.num1 / this.num2);
    let finalResult = document.getElementById("result") as HTMLInputElement;
    finalResult.valueAsNumber = this.result;
  }

  input1(value : any){
    this.num1 = parseInt(value);
  }

  input2(value : any){
    this.num2 = parseInt(value);
  }
}
