import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})

export class Page404Component {
  public favoriteColor = new FormControl('', Validators.required);

  public setValue(){
    this.favoriteColor.setValue('red');
  }

  public profilForm = new FormGroup({
    firstname : new FormControl('toto', Validators.required),
  });

  constructor(){
    this.profilForm.patchValue({
      firstname : 'Tata',
    });
  }
  
}