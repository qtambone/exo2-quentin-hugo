import { Injectable } from '@angular/core';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class FormDataService { //mon service est reset à chaque changement refresh ou changement d'url
  private formData: User | null = null; // Utilisez le modèle User au lieu de any

  setFormData(data: User) {
    this.formData = data;
  }

  getLastFormData() {
    return this.formData ;
  }
}
