import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Features } from 'src/app/core/models/features.enum';
import { ChartsState } from '../../models/chart.state';

export const selectChartState =
  createFeatureSelector<ChartsState>(Features.Charts);

export const selectCurrentSport = createSelector(
  selectChartState,
  (state: ChartsState) => state
);
