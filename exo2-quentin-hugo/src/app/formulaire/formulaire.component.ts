import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent {
  form: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: ['', [Validators.required, Validators.min(1)]],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', [Validators.required]]
  });


  isFormSubmitted: boolean = false;
  hide : boolean = true;

  onCheckboxChange(event: any) {
    console.log(event.target.checked)
    const isChecked = event.target.checked;
    if (isChecked) {
      //this.form.get('email')?.setValue("test@test");
      this.hide = true;
      this.form.get('email')?.setValidators([Validators.required, Validators.email])
      this.form.get('email')?.updateValueAndValidity();
    } else {
      this.hide = false
      this.form.get('email')?.setValidators([])
      this.form.get('email')?.updateValueAndValidity();
    }
  }
  constructor(private fb: FormBuilder, private router: Router, private formDataService: FormDataService) {}

  onSubmit() {
    if (this.form.valid) {
        this.formDataService.setFormData(this.form.value);
        this.isFormSubmitted = true;
        this.router.navigateByUrl("/welcome-page");
        console.log(this.formDataService);
    } else {
      console.log("formulaire non valide")
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

