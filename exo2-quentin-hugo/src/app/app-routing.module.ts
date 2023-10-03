import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { WelcomePageComponent } from './components/weclome-page/welcome-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import {ContactPageComponent} from "./components/contact-page/contact-page.component";
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { GestionPageComponent } from './components/gestion-page/gestion-page.component';

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
