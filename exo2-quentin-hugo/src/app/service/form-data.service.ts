import { Injectable } from '@angular/core';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class FormDataService { 
  private formData: User | null = null;

  setFormData(data: User) {
    this.formData = data;
  }

  getLastFormData() {
    return this.formData ;
  }
}
