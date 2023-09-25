import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  films : string[] = ['shrek', 'mononoke', 'titeuf', '7', 'drive'];
  @Output() filmClique = new EventEmitter<string>();

  public afficherDetailsFilm(titre: string) {
    this.filmClique.emit(titre);
  }

}
