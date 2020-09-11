import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { HealthState } from './health.state';
import { FetchAllMonitors } from './health.actions';

@Component({
  selector: 'app-health-monitor',
  templateUrl: './health-monitor.component.html',
})
export class HealthMonitorComponent implements OnInit {
  gridOptions: SohoDataGridOptions;
  @Select(HealthState.getMonitors) data$: Observable<any[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new FetchAllMonitors());
    this.gridOptions = {
      cellNavigation: false,
      columns: [
        {
          id: 'selectionCheckbox',
          sortable: false,
          resizable: false,
          formatter: Soho.Formatters.SelectionCheckbox,
        },
        {
          id: 'name',
          name: 'NAME',
          sortable: true,
          field: 'name',
          resizable: true,
          width: 240,
          formatter: Soho.Formatters.Ellipsis,
        },
        {
          id: 'description',
          name: 'DESCRIPTION',
          sortable: true,
          field: 'description',
          resizable: true,
          width: 240,
          formatter: Soho.Formatters.Ellipsis,
        },
        {
          id: 'lastUpdatedOn',
          name: 'LAST_UPDATED_ON',
          sortable: true,
          field: 'lastUpdatedOn',
          resizable: true,
          width: 180,
          formatter: Soho.Formatters.Date,
          dateFormat: `${ Soho.Locale.currentLocale.data.calendars[ 0 ].dateFormat.medium } ${ Soho.Locale.currentLocale.data.calendars[ 0 ].timeFormat }`,
        },
        {
          id: 'lastUpdatedBy',
          name: 'LAST_UPDATED_BY',
          sortable: true,
          field: 'lastUpdatedBy',
          resizable: true,
          width: 240,
          formatter: Soho.Formatters.Ellipsis,
        },
        {
          id: 'status',
          name: 'STATUS',
          sortable: true,
          field: 'status',
          resizable: false,
          width: 90,
          formatter: Soho.Formatters.Ellipsis,
        },
      ],
      paging: false,
      rowHeight: 'medium',
      selectable: 'multiple',
      enableTooltips: true,
    };
  }
}
