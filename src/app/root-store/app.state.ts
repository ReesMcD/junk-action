import { ChartsState } from '../charts/store/reducer/charts.reducer';
import { NavigationState } from '../core/components/navigation/store/reducer/navigation.reducer';
import { Features } from '../core/models/features';

export interface AppState {
  [Features.Navigation]: NavigationState;
  [Features.Charts]: ChartsState;
}
