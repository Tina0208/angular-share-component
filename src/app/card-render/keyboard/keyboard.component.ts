import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  show:boolean = true; //數字鍵盤是否顯示
  numberArr: Array<string> = ['1','2','3','修改','4','5','6','清除','7','8','9','0'];
  @Output() clickNumberEvent = new EventEmitter(); //傳送事件

  constructor() { }

  ngOnInit(): void { }

  //滑鼠按下去時method
  mouseDown(e:any){
    e.target.style.boxShadow = "0px 0px 5px black";
    //傳送按下的數字鍵的value
    this.clickNumberEvent.emit(e.target.innerText);
  }

  //滑鼠放開時method
  mouseUp(e:any){
    e.target.style.boxShadow = "none";
  }
}
