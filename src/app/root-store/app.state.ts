import { ChartsState } from '../charts/store/reducer/charts.reducer';
import { NavigationState } from '../core/components/navigation/store/reducer/navigation.reducer';

export interface AppState {
  navigation: NavigationState;
  charts: ChartsState;
}
