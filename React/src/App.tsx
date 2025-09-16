import { useCallback, useRef, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DataGrid, {
  FilterRow,
  HeaderFilter,
  SearchPanel,
} from 'devextreme-react/data-grid';
import Button from 'devextreme-react/button';
import { isItemsArray } from 'devextreme-react/common/data';
import type { DataGridRef } from 'devextreme-react/data-grid';
import notify from 'devextreme/ui/notify';
import { getOrders, type Order } from './data';

function App(): JSX.Element {
  const orders = getOrders();
  const [filteredData, setFilteredData] = useState<Order[]>([]);
  const dataGridRef = useRef<DataGridRef<Order, number>>(null);

  const getFilteredAndSortedData = useCallback((): void => {
    const instance = dataGridRef.current?.instance();
    if (!instance) return;

    const filterExpr = instance.getCombinedFilter(true);
    const dataSource = instance.getDataSource();
    const loadOptions = dataSource.loadOptions();

    dataSource
      .store()
      .load({ filter: filterExpr, sort: loadOptions.sort, group: loadOptions.group })
      .then((result) => {
        if (isItemsArray(result)) {
          setFilteredData(result);
        }
      })
      .catch((error: unknown) => notify(String(error), 'error', 1000));
  }, []);

  return (
    <div className="main">
      <div>
        <Button
          onClick={getFilteredAndSortedData}
          text="Get All Filtered And Sorted Data"
        />
      </div>
      <DataGrid
        id="gridContainer"
        ref={dataGridRef}
        dataSource={orders}
        keyExpr="ID"
        showBorders={true}
      >
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <SearchPanel visible={true} />
      </DataGrid>
      <br />
      <div className="title">Loaded data</div>
      <br />
      <DataGrid
        dataSource={filteredData}
        keyExpr="ID"
        showBorders={true}
      />
    </div>
  );
}

export default App;
