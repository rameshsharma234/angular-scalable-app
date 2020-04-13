import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule } from './starwars-routing.module';
import { StarwarsGridComponent } from './pages/starwars-grid/starwars-grid.component';
import { StarwarDetailsComponent } from './pages/starwar-details/starwar-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [StarwarsGridComponent, StarwarDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    StarwarsRoutingModule
  ]
})
export class StarwarsModule { }
