import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  films : string[] = ['shrek', 'shrek', 'shrek', 'shrek', 'shrek']; // à modifier
  @Output() filmClique = new EventEmitter<string>();

  public afficherDetailsFilm(titre: string) {
    this.filmClique.emit(titre);
  }

}
