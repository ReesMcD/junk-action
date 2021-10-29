import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ChartsService } from 'src/app/service/charts/charts.service';
import {
  ChartsActions,
  LoadAxesFailure,
  loadAxesSuccess,
} from '../action/charts.actions';
import { map, switchMap } from 'rxjs/operators';
import { isAppError } from 'src/app/core/utils/api.util';

@Injectable()
export class ChartsEffects {
  loadChartAxes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChartsActions.LoadAxes),
      switchMap(() => this.chartService.loadAxes()),
      map((response) =>
        isAppError(response)
          ? LoadAxesFailure(response)
          : loadAxesSuccess(response)
      )
    )
  );

  constructor(private actions$: Actions, private chartService: ChartsService) {}
}
