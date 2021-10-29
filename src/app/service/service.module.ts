import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChartsService } from './charts/charts.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ChartsService],
})
export class ServiceModule {}
