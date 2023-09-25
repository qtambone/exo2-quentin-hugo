import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public title : string = 'QuentinHugoTP1';
  public newBackgroundColor : string = '';
  public colors : string[] = ['orange','green', 'blue','yellow'];
  
  public changeBackground(color : string){
    this.newBackgroundColor = color;
  }
}