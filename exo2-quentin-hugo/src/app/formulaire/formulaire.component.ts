import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent {
  formFields = [
    { label: 'First Name', control: new FormControl('', [Validators.required]) },
    { label: 'Last Name', control: new FormControl('', [Validators.required]) },
    { label: 'Age', control: new FormControl('', [Validators.required, Validators.min(1)]) },
    { label: 'Email', control: new FormControl('', [Validators.required, Validators.email]) },
    { label: 'Comment', control: new FormControl('', [Validators.required]) }
  ];

  isFormSubmitted: boolean = false;

  constructor(private formDataService: FormDataService) {
    console.log("verification du service partagé : formulaire.ts");
    console.log(this.formDataService);  
   }

  onSubmit() {
    console.log("ngSubmit formulaire.ts") ;
    const formData = this.formFields.map(field => ({ label: field.label, value: field.control.value }));

    this.formDataService.setFormData(formData);
    this.isFormSubmitted = true ;
    console.log(this.formDataService);  
  }
  
  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'You must enter a value';
    }

    if (control.hasError('email')) {
      return 'Not a valid email';
    }

    if (control.hasError('min')) {
      return 'Age must be greater than 0';
    }

    return '';
  }
}

