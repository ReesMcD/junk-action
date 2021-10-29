import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { ChartsStoreModule } from '../charts/store/charts-store.module';
import { NavigationStoreModule } from '../core/components/navigation/store/navigation-store.module';

@NgModule({
  declarations: [],
  imports: [
    NavigationStoreModule,
    ChartsStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
})
export class RootStoreModule {}
