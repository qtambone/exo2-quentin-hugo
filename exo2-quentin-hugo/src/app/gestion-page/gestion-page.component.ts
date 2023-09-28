import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})
export class GestionPageComponent implements OnInit {
  data: any[] = [];

  constructor(private formDataService: FormDataService) {     
    console.log("verification du service partagé : gestion-page.ts");
    console.log(this.formDataService);  
  }

  ngOnInit() {
    console.log("ngOnInit gestion-page.ts") ;
    console.log(this.formDataService);

    this.data = this.formDataService.getLastFormData();
    console.log(this.data) ; // il est vide ici
  }
}
