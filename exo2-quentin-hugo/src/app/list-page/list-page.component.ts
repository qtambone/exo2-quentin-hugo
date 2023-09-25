import { Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent {
  titreFilm : string = '';
  afficheFilm : string = '';

  afficherDetailsFilm(titre : string) {
    this.titreFilm = titre;
    this.afficheFilm = `assets/${titre}.jpeg`;
  }
}
