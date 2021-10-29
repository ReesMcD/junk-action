import { ChartsState } from '../charts/models/chart.state';
import { NavigationState } from '../core/components/navigation/store/reducer/navigation.reducer';
import { Features } from '../core/models/features.enum';

export interface AppState {
  [Features.Navigation]: NavigationState;
  [Features.Charts]: ChartsState;
}
