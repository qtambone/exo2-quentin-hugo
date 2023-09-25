import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
  public title : string = 'QuentinHugoTP1';
  public newBackgroundColor : string = '';
  public colors : string[] = ['orange','green', 'blue','yellow'];
  
  public changeBackground(color : string){
    this.newBackgroundColor = color;
  }
}