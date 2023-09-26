import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  estVisible: boolean | undefined;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}

