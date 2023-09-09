import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrls: ['./toto.component.scss']
})
export class TotoComponent {
  @Input() texte : string = "";
}
