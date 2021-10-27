import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Features } from 'src/app/core/models/features';
import {
  chartsReducerWrapper,
} from './reducer/charts.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(Features.Charts, chartsReducerWrapper)],
})
export class ChartsStoreModule {}
