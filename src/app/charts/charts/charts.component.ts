import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentSport } from 'src/app/core/components/navigation/store/selector/navigation.selectors';
import { AppState } from 'src/app/root-store/app.state';
import { ChartsState } from '../models/chart.state';
import { changeXAxis, changeYAxis, loadAxes } from '../store/action/charts.actions';
import { selectChartState } from '../store/selector/charts.selectors';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  selectedSport$: Observable<string> = this.store.pipe(
    select(selectCurrentSport)
  );
  chartState$: Observable<ChartsState> = this.store.pipe(select(selectChartState));
  // axes$: Observable<any> = this.store.pipe(select(loadAxes));

  axes = ['PPG', 'USAGE'];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadAxes());
    // this.axes$.subscribe((axes) => {
    //   console.log(axes);
    // })
  }

  changeXAxis(event: any) {
    this.store.dispatch(changeXAxis({ label: event.target.value }));
  }

  changeYAxis(event: any) {
    this.store.dispatch(changeYAxis({ label: event.target.value }));
  }
}
