import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule } from './starwars-routing.module';
import { StarwarsGridComponent } from './pages/starwars-grid/starwars-grid.component';
import { StarwarDetailsComponent } from './pages/starwar-details/starwar-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StarwarsService } from './services/starwars.service';
import { FilmPieChartComponent } from './components/film-pie-chart/film-pie-chart.component';


@NgModule({
  declarations: [StarwarsGridComponent, StarwarDetailsComponent, FilmPieChartComponent],
  imports: [
    CommonModule,
    SharedModule,
    StarwarsRoutingModule
  ],
  providers: [
    StarwarsService
  ]
})
export class StarwarsModule { }
