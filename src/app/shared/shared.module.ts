import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HeaderComponent } from '../core/components/header/header.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartModule } from 'angular-highcharts';



@NgModule({
  declarations: [PageNotFoundComponent, ChartComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ChartModule
  ],
  exports : [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ChartModule,
    ChartComponent
  ]
})
export class SharedModule { }
