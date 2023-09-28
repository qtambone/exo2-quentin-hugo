import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})

export class GestionPageComponent implements OnInit {
  data: User | null = null;;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.data = this.formDataService.getLastFormData();
  }
}
