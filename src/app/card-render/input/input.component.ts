import { KeyboardComponent } from './../keyboard/keyboard.component';
import { Component, Input, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
show:boolean = true; //傳送數字鍵盤是否顯示
@Input() title:string = "插入讀卡機";
@Input() placeholder:string = "請選擇讀卡機";
@Input() icon:string = "fa-solid fa-fax";
@Input() value:string = ""; //input欄位輸入的值
@Input() keyboardIcon:string = "";
@Output() keyboardShowEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  //鍵盤icon，點擊開關數字鍵盤method
  keyboardShow(){
    this.show = !this.show; //toggle傳送的值
    this.keyboardShowEvent.emit(this.show); //值送到父層CardRendorComponent
  }
}
