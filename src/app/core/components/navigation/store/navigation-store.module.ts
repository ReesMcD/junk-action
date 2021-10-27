import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  navigationFeatureKey,
  navigationReducerWrapper,
} from './reducer/navigation.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(navigationFeatureKey, navigationReducerWrapper),
  ],
})
export class NavigationStoreModule {}
