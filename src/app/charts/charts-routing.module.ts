import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from '../charts/charts/charts.component';

const routes: Routes = [{ path: 'charts', component: ChartsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalysisRoutingModule {}
