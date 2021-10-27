import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NavigationState, navigationFeatureKey} from '../reducer/navigation.reducer'

export const selectNavigationState = createFeatureSelector<NavigationState>(
  navigationFeatureKey,
);

export const selectCurrentSport = createSelector(
    selectNavigationState,
    (state: NavigationState) => state.currentSport)