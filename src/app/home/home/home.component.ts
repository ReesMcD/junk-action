import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentSport } from 'src/app/core/components/navigation/store/selector/navigation.selectors';
import { AppState } from 'src/app/root-store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedSport$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.selectedSport$ = this.store.pipe(select(selectCurrentSport));
  }
  ngOnInit(): void {}
}
