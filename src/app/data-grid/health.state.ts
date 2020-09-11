import { Selector, State, Action, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { FetchAllMonitors } from './health.actions';
import { HealthDataService } from './health-data.service';
import { Injectable } from '@angular/core';

@State({
  name: 'health',
  defaults: {
    monitors: [],
  },
})
@Injectable()
export class HealthState {
  constructor(private healthDataService: HealthDataService) {
  }

  @Selector()
  static getMonitors(state: any): any[] {
    return state.monitors;
  }

  @Action(FetchAllMonitors)
  fetchAllHealthMonitors(ctx: StateContext<any>) {
    return this.healthDataService.getData$().pipe(
      tap((monitors: any[]) => {
        ctx.patchState({
          monitors,
        });
      }),
      catchError((error) => {
        ctx.patchState({
          loading: false,
        });
        return throwError('Server error: ' + error);
      }),
    );
  }
}
