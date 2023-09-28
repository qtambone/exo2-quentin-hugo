import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { WelcomePageComponent } from './weclome-page/welcome-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import {ContactPageComponent} from "./contact-page/contact-page.component";
import { FormulaireComponent } from './formulaire/formulaire.component';
import { GestionPageComponent } from './gestion-page/gestion-page.component';

const routes: Routes = [
  { path : 'welcome-page', component : WelcomePageComponent},
  { path : 'list-page', component : ListPageComponent},
  { path : 'formulaire', component : FormulaireComponent},
  { path : 'gestion-page', component : GestionPageComponent},
  { path : 'contact-page', component : ContactPageComponent},
  { path : '', redirectTo : '/welcome-page', pathMatch : 'full'},
  { path : '**', component : WelcomePageComponent} ] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
