import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {
  NavigationState,
  reducer,
} from '../navigation/store/reducer/navigation.reducer';

export interface State {
  navigation: NavigationState;
}

export const reducers: ActionReducerMap<State> = {
  navigation: reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
