import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppRoutes } from 'src/app/core/models/routes';
import { Sport } from 'src/app/core/models/sport';
import { AppState } from 'src/app/root-store/app.state';
import { changeSport } from '../store/action/navigation.actions';
import { selectCurrentSport } from '../store/selector/navigation.selectors';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  selectedSport$: Observable<string>;
  appRoutes = AppRoutes;
  sports = Sport;

  constructor(private store: Store<AppState>) {
    this.selectedSport$ = this.store.pipe(select(selectCurrentSport));
  }

  ngOnInit(): void {}

  changeSport(event: any) {
    this.store.dispatch(changeSport(event.target.value));
  }
}
