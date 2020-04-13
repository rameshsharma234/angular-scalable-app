import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    MatTableModule

  ],
  exports : [
    MatTableModule
  ]
})
export class SharedModule { }
