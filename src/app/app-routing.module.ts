import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaibaMaisComponent } from './components/saiba-mais/saiba-mais.component';
import { HomeComponent } from './components/home/home.component';
import { InscricoesComponent } from './components/inscricoes/inscricoes.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'SaibaMais',component: SaibaMaisComponent},
  {path: 'Inscricoes',component: InscricoesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
