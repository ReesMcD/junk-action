import { createAction, props } from '@ngrx/store';

export const NAVIGATION_ACTIONS = {
  CHANGE_SPORT: '[Navigation] Change Sport'
}

export const changeSport = createAction(
  NAVIGATION_ACTIONS.CHANGE_SPORT, (sport: string) => ({sport}),
);
