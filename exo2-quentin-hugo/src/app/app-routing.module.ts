import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Page404Component } from './page404/page404.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path : 'main-page', component : MainPageComponent},        
  { path : '', redirectTo : '/main-page', pathMatch : 'full'},      
  { path : '**', component : Page404Component} ] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {    
 }