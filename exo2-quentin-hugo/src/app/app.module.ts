import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';




import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomePageComponent } from './weclome-page/welcome-page.component';
import { ImageComponent } from './image/image.component';
import { ListPageComponent } from './list-page/list-page.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
    ImageComponent,
    ListPageComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
