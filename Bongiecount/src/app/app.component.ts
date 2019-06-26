import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bongiecount';
  newCounts:string;
  countA=0;
  countAVA:number=0;
  Ava1:Number=0;
  Ava2:Number=0;
  Ava3:Number=0;
  Ava4:Number=0;
  Ava5:Number=0;
highestAva:Number=0;
countSum:number=0;
reverseLeta:String
newLeter:String

CountLength(){
  this.countA = 0;
  for(var B=0;B<this.newCounts.length;B++){
    if(this.newCounts.charAt(B)=="a"){
      this.countA += 1
    }
    else{
      
    }
  }
}

  CountAvarage(){  
  this.countAVA= +this.Ava1+ +this.Ava2+ +this.Ava3+ +this.Ava4+ +this.Ava5;
     this.countAVA=this.countAVA/5
     }

highestNum(){
if(this.Ava1>this.highestAva)
{
    this.highestAva=this.Ava1
  }
    if(this.Ava2>this.highestAva){
      this.highestAva=this.Ava2
  }
  if(this.Ava3>this.highestAva){
    this.highestAva=this.Ava3
}
if(this.Ava4>this.highestAva){
  this.highestAva=this.Ava4
}
if(this.Ava5>this.highestAva){
  this.highestAva=this.Ava5
}
}

calculateSum(){
  this.countSum= +this.Ava1+ +this.Ava2+ +this.Ava3+ +this.Ava4+ +this.Ava5;
     this.countSum=this.countSum
}

reverseLetters(Str:string){
  
return Str.split('').reverse().join('');
 
}

}


