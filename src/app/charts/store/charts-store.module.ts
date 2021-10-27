import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  chartsFeatureKey,
  chartsReducerWrapper,
} from './reducer/charts.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(chartsFeatureKey, chartsReducerWrapper)],
})
export class ChartsStoreModule {}
