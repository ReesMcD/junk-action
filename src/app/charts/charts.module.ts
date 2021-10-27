import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { ChartsRoutingModule } from './charts-routing.module';

@NgModule({
  declarations: [ChartsComponent],
  imports: [CommonModule, ChartsRoutingModule],
})
export class ChartsModule {}
