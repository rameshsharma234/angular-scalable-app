import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http/http.service';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    HttpService
  ]
})
export class CoreModule { }
