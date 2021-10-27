import { Action, createReducer, on } from '@ngrx/store';
import { changeXAxis, changeYAxis } from '../action/charts.actions';

export const chartsFeatureKey = 'charts';

export interface ChartsState {
  xAxis: string;
  yAxis: string;
}

export const initialState: ChartsState = {
  xAxis: '',
  yAxis: '',
};

export const chartsReducer = createReducer(
  initialState,
  on(changeXAxis, (state: ChartsState, { x }) => ({
    ...state,
    xAxis: x,
  })),
  on(changeYAxis, (state: ChartsState, { y }) => ({
    ...state,
    yAxis: y,
  }))
);

export function chartsReducerWrapper(
  state: ChartsState | undefined,
  action: Action
) {
  return chartsReducer(state, action);
}
