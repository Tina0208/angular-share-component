import { KeyboardComponent } from './card-render/keyboard/keyboard.component';
import { InputComponent } from './card-render/input/input.component';
import { CardRenderComponent } from './card-render/card-render.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CardRenderComponent,
    InputComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
