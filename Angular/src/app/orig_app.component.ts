import { Component, ViewChild } from "@angular/core";

import {DxDataGridComponent, DxDataGridModule} from 'devextreme-angular';

import { Order, Service } from './app.service';
import DevExpress from "devextreme";
import dxDataGrid = DevExpress.ui.dxDataGrid;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [Service]
})
export class AppComponent {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent | undefined;


  ds: Order[] | null;
  orders: Order[];

  constructor(service: Service) {
    this.orders = service.getOrders();
    this.ds = [];
  }
  getFilteredAndSortedData() {
    let grid: dxDataGrid | undefined = this.dataGrid?.instance;
    let filterExpr = grid?.getCombinedFilter(true);
    const dataSource = grid?.getDataSource();
    const loadOptions = dataSource?.loadOptions();

    dataSource
      ?.store()
      .load({ filter: filterExpr, sort: loadOptions?.sort, group: loadOptions?.group })
      .then((result: any) => {
        // your code...
        this.ds = result;
      });
  }
}
