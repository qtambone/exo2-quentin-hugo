import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomePageComponent } from './weclome-page/welcome-page.component';
import { ImageComponent } from './image/image.component';
import { ListPageComponent } from './list-page/list-page.component';
import { LinksComponent } from './links/links.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgIf} from "@angular/common";
import { GestionPageComponent } from './gestion-page/gestion-page.component';
import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
    ImageComponent,
    ListPageComponent,
    ContactPageComponent,
    LinksComponent,
    FormulaireComponent,
    GestionPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    NgIf,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
