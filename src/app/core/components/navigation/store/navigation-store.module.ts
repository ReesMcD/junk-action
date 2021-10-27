import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Features } from 'src/app/core/models/features';
import {
  navigationReducerWrapper,
} from './reducer/navigation.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(Features.Navigation, navigationReducerWrapper),
  ],
})
export class NavigationStoreModule {}
