import { createFeatureSelector, createSelector } from '@ngrx/store';
import { chartsFeatureKey, ChartsState } from '../reducer/charts.reducer';

export const selectChartState =
  createFeatureSelector<ChartsState>(chartsFeatureKey);

export const selectCurrentSport = createSelector(
  selectChartState,
  (state: ChartsState) => state
);
