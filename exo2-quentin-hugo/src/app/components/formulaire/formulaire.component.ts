import { Component } from '@angular/core';
import { FormDataService } from '../../service/form-data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent {
  constructor(private fb: FormBuilder, private router: Router, private formDataService: FormDataService) {}

  form: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: ['', [Validators.required, Validators.min(1)]],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', [Validators.required]]
  });

  isFormSubmitted : boolean = false;
  hide : boolean = false;

    onCheckboxChange() {
      this.hide = !this.hide;
      if (this.hide == true) {
        this.form.get('email')?.setValidators([])
      }else{
        this.form.get('email')?.setValidators([Validators.required, Validators.email])
      }
      this.form.get('email')?.updateValueAndValidity();
    }

  onSubmit() {
    if (this.form.valid) {
      this.formDataService.setFormData(this.form.value);
      this.isFormSubmitted = true;
      setTimeout(() => {
        this.router.navigateByUrl("/welcome-page");
      }, 1500); // Naviguer vers la welcome page après 1,5s
    }
  }
  

  getErrorMessage(controlName: string) {
    const control = this.form.get(controlName);
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    if (control?.hasError('email')) {
      return 'Not a valid email';
    }
    if (control?.hasError('min')) {
      return 'Age must be greater than 0';
    }
    if (control?.hasError('invalidAge')) {
      return 'Age must be a number';
    }
    return '';
  }

  isSubmitButtonDisabled(){
    return !this.form.valid;
  }
}

