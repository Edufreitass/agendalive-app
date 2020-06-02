import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

/** 
 * Aqui que vamos mapear, mostrar ao Angular, dependendo do caminho(path) qual 
 * é o componente que ele dever seguir, abrir!
 * Após a criação de um componente, é necessário criar o roteamento para componente.
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
