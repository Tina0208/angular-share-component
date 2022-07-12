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
  inputValue:Array<string> = [];
  inputComponent?:string;
  keyboardIcon:string = "fa-solid fa-keyboard";
  @ViewChild('input1') input1!: InputComponent;
  @ViewChild('input2') input2!: InputComponent;
  @ViewChild(KeyboardComponent) Keyboard!: KeyboardComponent;

  constructor() { }

  ngOnInit(): void { }

  //數字鍵盤點擊method
  getNumber(e:any){
    if(e === "修改"){
      this.inputValue.pop();
    }else if(e === "清除"){
      this.inputValue = [];
    }else {
      this.inputValue.push(e);
    }

    //判斷針對哪個input進行輸入
    switch(this.inputComponent){
      case 'input1':
        this.input1.value = this.inputValue.join('');
        break;
      case 'input2':
        this.input2.value = this.inputValue.join('');
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
