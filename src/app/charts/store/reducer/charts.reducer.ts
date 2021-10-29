import { Action, createReducer } from '@ngrx/store';
import { produceOn } from 'src/app/core/utils/store.util';
import { ChartsState } from '../../models/chart.state';
import {
  changeXAxis,
  changeYAxis,
  loadAxesSuccess,
} from '../action/charts.actions';

export const initialState: ChartsState = {
  axes: [],
  xAxis: '',
  yAxis: '',
};

export const chartsReducer = createReducer(
  initialState,
  produceOn(loadAxesSuccess, (draft, payload) => {
    draft.axes = payload.axes
  }),
  produceOn(changeXAxis, (draft, { label }) => {
    draft.xAxis = label;
  }),
  produceOn(changeYAxis, (draft, { label }) => {
    draft.yAxis = label;
  })
);

export function chartsReducerWrapper(
  state: ChartsState | undefined,
  action: Action
) {
  return chartsReducer(state, action);
}
