import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BkNameBangComponent } from './components/bk-name-bang/bk-name-bang.component';
import { SaibaMaisComponent } from './components/saiba-mais/saiba-mais.component';
import { InscricoesComponent } from './components/inscricoes/inscricoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BkNameBangComponent,
    SaibaMaisComponent,
    InscricoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
