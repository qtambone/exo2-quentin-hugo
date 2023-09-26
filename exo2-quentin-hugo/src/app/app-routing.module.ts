import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Page404Component } from './page404/page404.component';
import { WelcomePageComponent } from './weclome-page/welcome-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import {ContactPageComponent} from "./contact-page/contact-page.component";

const routes: Routes = [
  { path : 'welcome-page', component : WelcomePageComponent},
  { path : 'list-page', component : ListPageComponent},
  { path : 'contact', component : ContactPageComponent},
  { path : '', redirectTo : '/welcome-page', pathMatch : 'full'},
  { path : '**', component : WelcomePageComponent} ] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
