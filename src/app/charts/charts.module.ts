import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsEffects } from './store/effect/charts.effects';
import { EffectsModule } from '@ngrx/effects';
import { ServiceModule } from '../service/service.module';

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    ServiceModule,
    ChartsRoutingModule,
    EffectsModule.forFeature([ChartsEffects]),
  ],
})
export class ChartsModule {}
