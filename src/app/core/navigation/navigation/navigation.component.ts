import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sport } from 'src/app/core/models/sport';
import { changeSport } from '../store/action/navigation.actions';
import { NavigationState } from '../store/reducer/navigation.reducer';
import { selectCurrentSport } from '../store/selector/navigation.selectors';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  selectedSport$: Observable<string>
  sports = Sport;

  constructor(private store: Store<NavigationState>) {
    this.selectedSport$ = this.store.pipe(select(selectCurrentSport))
  }

  ngOnInit(): void {
  }

  changeSport(event: any) {
    const sport = event.target.value 
    this.store.dispatch(changeSport(sport));
  }
}
