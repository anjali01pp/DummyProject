import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
 
  input:string = '';
  result:any = '';
  text :string="Cannot Divide with Zero";
 
  pressNum(num: string) {
    
    //Do Not Allow . more than once
    if (num==".") {
      if (this.input !="" ) {
 
        const lastNum=this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        
      }
    }
 
    //Do Not Allow 0 at beginning. 
    //Javascript will throw Octal literals are not allowed in strict mode.
    // if (num=="0") {
    //   if (this.input=="" ) {
    //     return ;
    //   }
    //   const PrevKey = this.input[this.input.length - 1];
    //   if ( PrevKey === '-' || PrevKey === '+')  {
    //       return;
    //   }

    // }
 
    this.input = this.input + num
    this.calcAnswer();
  }
 
 
  getLastOperand() {
    let pos:number;
    console.log(this.input)
    pos=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) {
      pos=this.input.lastIndexOf("-")
    }
    if (this.input.toString().lastIndexOf("*") > pos)
    {
      pos=this.input.lastIndexOf("*")
  }
    if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
    console.log('Last '+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  }
 
 
  pressOperator(op: string) {
 
    //Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return ;
    }
   
    this.input = this.input + op
    this.calcAnswer();
  }
 
 
  clear() {
    if (this.input !="" ) {
      this.input=this.input.substr(0, this.input.length-1)
    }
  }
 
  allClear() {
    this.result = '';
    this.input = '';
  }
 
  calcAnswer() {
    let formula = this.input;
 
    let lastKey = formula;
 
    if (lastKey === '.')  {
      formula=formula;
    }
 
    lastKey = formula;
 
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula;
    }
 
    console.log("Formula " +formula);
    let res = eval(formula);
  
    if (isNaN(res) ||!isFinite(res)){
      this.result =this.text;
    }
    else {
      this.result = eval(formula);
    }
  }
 
  getAnswer() {
    this.calcAnswer();
    if (this.result != this.text){
    this.input = this.result;
    }
    if (this.input=="0"){
       this.input="0";
  }

  }
 
}
