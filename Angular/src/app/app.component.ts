import { Component, ViewChild } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { isItemsArray } from 'devextreme-angular/common/data';
import notify from 'devextreme/ui/notify';
import { AppService, type Order } from './app.service';
import { DxButtonModule } from 'devextreme-angular/ui/button';

@Component({
  imports: [DxButtonModule, DxDataGridModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(DxDataGridComponent, { static: false })
    dataGrid!: DxDataGridComponent<Order, number>;

  orders: Order[];

  filteredData: Order[] = [];

  constructor(private readonly service: AppService) {
    this.orders = service.getOrders();
  }

  getFilteredAndSortedData(): void {
    const gridInstance = this.dataGrid?.instance;
    if (!gridInstance) return;

    const filterExpr = gridInstance.getCombinedFilter(true);
    const dataSource = gridInstance.getDataSource();
    const loadOptions = dataSource.loadOptions();

    dataSource
      .store()
      .load({ filter: filterExpr, sort: loadOptions.sort, group: loadOptions.group })
      .then((result) => {
        if (isItemsArray(result)) {
          this.filteredData = result;
        }
      })
      .catch((error: unknown) => notify(String(error), 'error', 1000));
  }
}
