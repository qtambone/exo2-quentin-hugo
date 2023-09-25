import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Output() event = new EventEmitter;
  @Input() public color : string[] = [];
  
  public addEvent(value: string){
    this.event.emit(value);
  }

}
