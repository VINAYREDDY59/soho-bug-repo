import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class HealthDataService {

  getData$(): Observable<any[]> {
    return of([
      {
        id: 1,
        name: 'health monitor 1',
        description: 'description',
        lastUpdatedBy: 'Jeroen',
        lastUpdatedOn: '9/2/2020',
        status: 'inactive',
      },
      {
        id: 2,
        name: 'health monitor 2',
        lastUpdatedBy: 'Anh',
        status: 'active',
      },
      {
        id: 3,
        name: 'health monitor 3',
        lastUpdatedBy: 'Jeroen',
        lastUpdatedOn: '9/2/2020',
        status: 'inactive',
      },
    ]).pipe(
      delay(1000),
    );
  }
}
