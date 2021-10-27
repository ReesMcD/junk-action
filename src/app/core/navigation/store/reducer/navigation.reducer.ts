import { createReducer, on } from '@ngrx/store';
import { Sport } from '../../../models/sport';
import { changeSport } from "../action/navigation.actions";

export const navigationFeatureKey = 'navigation';

export interface NavigationState {
  currentSport: string
}

export const initialState: NavigationState = {
  currentSport: Sport.NFL
};

export const reducer = createReducer(
  initialState,
  on(changeSport, (state: NavigationState, { sport }) => ({
    ...state,
    currentSport: sport
  }))
);

