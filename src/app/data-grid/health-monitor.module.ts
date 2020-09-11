import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SohoDataGridModule } from 'ids-enterprise-ng';
import { Route, RouterModule } from '@angular/router';
import { HealthMonitorComponent } from './health-monitor.component';
import { NgxsModule } from '@ngxs/store';

import { HealthState } from './health.state';
import { HealthDataService } from './health-data.service';

const routes: Route[] = [
  {
    path: '',
    component: HealthMonitorComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      HealthState,
    ]),
    RouterModule.forChild(routes),
    SohoDataGridModule,
  ],
  declarations: [
    HealthMonitorComponent,
  ],
  providers: [
    HealthDataService,
  ],
})
export class HealthMonitorModule {
}
