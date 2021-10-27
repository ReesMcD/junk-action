import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from '../charts/charts/charts.component';
import { AppRoutes } from '../core/models/routes';

const routes: Routes = [{ path: AppRoutes.Charts, component: ChartsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
