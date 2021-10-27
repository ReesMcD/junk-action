import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis/analysis.component';
import { AnalysisRoutingModule } from './analysis-routing.module';


@NgModule({
  declarations: [
    AnalysisComponent,
  ],
  imports: [
    CommonModule,
    AnalysisRoutingModule
  ],
})
export class AnalysisModule { }
