import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomePageComponent } from './components/weclome-page/welcome-page.component';
import { ImageComponent } from './components/image/image.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { LinksComponent } from './components/links/links.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgIf} from "@angular/common";
import { GestionPageComponent } from './components/gestion-page/gestion-page.component';
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
