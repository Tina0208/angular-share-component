import { KeyboardComponent } from './keyboard/keyboard.component';
import { InputComponent } from './../card-render/input/input.component';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card-render',
  templateUrl: './card-render.component.html',
  styleUrls: ['./card-render.component.css']
})
export class CardRenderComponent implements OnInit {
  title1:string = "金融卡密碼";
  icon1:string = "fa-solid fa-unlock-keyhole";
  placeholder1:string = "請輸入6-12碼";
  // inputValue1:Array<string> = [];
  // inputValue2:Array<string> = [];
  inputValue1:string = "";
  inputValue2:string = "";
  inputComponent?:string;
  keyboardIcon:string = "fa-solid fa-keyboard";
  @ViewChild('input1') input1!: InputComponent;
  @ViewChild('input2') input2!: InputComponent;
  @ViewChild(KeyboardComponent) Keyboard!: KeyboardComponent;

  constructor() { }

  ngOnInit(): void { }

  //數字鍵盤點擊method
  getNumber(e:any){
    //判斷針對哪個input進行輸入
    switch(this.inputComponent){
      case 'input1':
        console.log(e);
        if(e === "修改"){
          const arr = this.inputValue1.split('');
          arr.pop();
          this.inputValue1 = arr.join('');
        }else if(e === "清除"){
          this.inputValue1 = "";
        }else {
          this.inputValue1 += e;
        }
        this.input1.value = this.inputValue1;
        break;
      case 'input2':
        console.log(e);
        if(e === "修改"){
          const arr = this.inputValue2.split('');
          arr.pop();
          this.inputValue2 = arr.join('');
        }else if(e === "清除"){
          this.inputValue2 = "";
        }else {
          this.inputValue2 += e;
        }
        this.input2.value = this.inputValue2;
        break;
      default:
        break;
    }
  }

  //選取點選的input method
  focus(e: string){
    this.inputComponent = e;
  }

  //接收InputComponent的鍵盤點擊method傳來的值，設定數字鍵盤顯示或不顯示
  keyboardShow(e:any){
    this.Keyboard.show = e;
  }
}
