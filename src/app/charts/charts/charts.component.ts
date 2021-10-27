import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentSport } from 'src/app/core/components/navigation/store/selector/navigation.selectors';
import { AppState } from 'src/app/root-store/app.state';
import { changeXAxis, changeYAxis } from '../store/action/charts.actions';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  selectedSport$: Observable<string>;

  axes = ['PPG', 'USAGE']

  constructor(private store: Store<AppState>) {
    this.selectedSport$ = this.store.pipe(select(selectCurrentSport));
  }

  ngOnInit(): void {}

  changeXAxis(event: any) {
    this.store.dispatch(changeXAxis(event.target.value));
  }

  changeYAxis(event: any) {
    this.store.dispatch(changeYAxis(event.target.valueisValue));
  }
}
