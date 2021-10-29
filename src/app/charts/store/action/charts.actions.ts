import { createAction, props } from '@ngrx/store';
import { AppError } from 'src/app/core/utils/api.util';
import { Axis } from '../../models/axis';
import { LoadAxesResponse } from '../../models/load-axes.response';

export const ChartsActions = {
  LoadAxes: '[Chart API] Load Axes',
  LoadAxesSuccess: '[Chart API] Load Axes Success',
  LoadAxesFailure: '[Chart API] Load Axes',
  ChangeXAxis: '[Chart] Change X Axis',
  ChangeYAxis: '[Chart] Change Y Axis',
};

export const loadAxes = createAction(ChartsActions.LoadAxes);
export const loadAxesSuccess = createAction(
  ChartsActions.LoadAxesSuccess,
  props<LoadAxesResponse>()
);
export const LoadAxesFailure = createAction(
  ChartsActions.LoadAxesFailure,
  props<AppError>()
);

export const changeXAxis = createAction(
  ChartsActions.ChangeXAxis,
  props<Axis>()
);
export const changeYAxis = createAction(
  ChartsActions.ChangeYAxis,
  props<Axis>()
);
