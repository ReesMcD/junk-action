import { createAction, props } from '@ngrx/store';

export const CHART_ACTIONS = {
  CHANGE_X_AXIS: '[Chart] Change X Axis',
  CHANGE_Y_AXIS: '[Chart] Change Y Axis',
};

export const changeXAxis = createAction(
  CHART_ACTIONS.CHANGE_X_AXIS,
  (x: string) => ({ x })
);
export const changeYAxis = createAction(
  CHART_ACTIONS.CHANGE_X_AXIS,
  (y: string) => ({ y })
);
