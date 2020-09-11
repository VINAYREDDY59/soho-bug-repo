import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HealthDataService {

  constructor(private httpClient: HttpClient) {
  }

  getData$(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3004/health-monitors');
  }
}
