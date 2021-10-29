import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { propagateApiError } from 'src/app/core/utils/api.util';

@Injectable()
export class ChartsService {
  constructor(private http: HttpClient) {}

  loadAxes() {
    return this.http.get('./../../../assets/test-data/chart-axis.json').pipe(
      map((resp) => resp),
      propagateApiError()
    );
  }
}
