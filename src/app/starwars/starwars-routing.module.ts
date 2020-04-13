import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarwarsGridComponent } from './pages/starwars-grid/starwars-grid.component';
import { StarwarDetailsComponent } from './pages/starwar-details/starwar-details.component';


const routes: Routes = [
  {
    path: '',
    component: StarwarsGridComponent
  },
  {
    path: 'details/:id',
    component: StarwarDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarwarsRoutingModule { }
