import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Features } from 'src/app/core/models/features';
import {
  NavigationState,
} from '../reducer/navigation.reducer';

export const selectNavigationState =
  createFeatureSelector<NavigationState>(Features.Navigation);

export const selectCurrentSport = createSelector(
  selectNavigationState,
  (state: NavigationState) => state.currentSport
);
