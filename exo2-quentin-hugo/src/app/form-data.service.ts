import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService { //mon service est reset à chaque changement refresh ou changement d'url
  public formData: any ;

  setFormData(data: any) {
    this.formData = data;
    console.log("setFormData form-data.service.ts") ;
    console.log(this.formData) ;
  }

  getLastFormData() {
    console.log("getLastFormData form-data.service.ts") ;
    console.log(this.formData) ;
    return this.formData ;
  }
}