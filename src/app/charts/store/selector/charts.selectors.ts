import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Features } from 'src/app/core/models/features';
import { ChartsState } from '../reducer/charts.reducer';

export const selectChartState =
  createFeatureSelector<ChartsState>(Features.Charts);

export const selectCurrentSport = createSelector(
  selectChartState,
  (state: ChartsState) => state
);
