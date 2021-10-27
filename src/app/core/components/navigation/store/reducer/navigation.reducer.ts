import { Action, createReducer, on } from '@ngrx/store';
import { Sport } from '../../../../models/sport';
import { changeSport } from '../action/navigation.actions';
export interface NavigationState {
  currentSport: string;
}

export const initialState: NavigationState = {
  currentSport: Sport.NFL,
};

export const navigationReducer = createReducer(
  initialState,
  on(changeSport, (state: NavigationState, { sport }) => ({
    ...state,
    currentSport: sport,
  }))
);

export function navigationReducerWrapper(
  state: NavigationState | undefined,
  action: Action
) {
  return navigationReducer(state, action);
}
