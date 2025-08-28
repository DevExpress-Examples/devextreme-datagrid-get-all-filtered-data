import React, {useRef, useState} from "react";
import {Button} from "devextreme-react/button";
import DataGrid, {
  FilterRow, HeaderFilter, SearchPanel,
} from 'devextreme-react/data-grid';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import service from "./data.js";


const orders = service.getOrders();
const style = {margin: '30px'};

export default function App() {
  const dataGridRef = useRef(null);
  const [ds, setDs] = useState([]);

  const getFilteredAndSortedData = React.useCallback(() => {
    const grid = dataGridRef.current.instance;
    const filterExpr = grid.getCombinedFilter(true);
    const dataSource = grid.getDataSource();
    const loadOptions = dataSource.loadOptions();

    dataSource
        .store()
        .load({ filter: filterExpr, sort: loadOptions.sort, group: loadOptions.group })
        .then((result) => {
          // your code...
          setDs(result)
        });
  }, [dataGridRef]);

  return (
      <div style={style}>
        <div><Button onClick={getFilteredAndSortedData} text="Get All Filtered And Sorted Data"/></div>
      <div>
        <DataGrid id="gridContainer"
            ref={ dataGridRef }
            dataSource={orders}
            keyExpr="ID"
            showBorders={true}>
          <FilterRow visible={true} />
          <HeaderFilter visible={true} />
          <SearchPanel visible={true} />
        </DataGrid>
          <br/>
        <div className="title">Loaded data</div>
        <br/>
          <DataGrid
          dataSource={ds}
          keyExpr='ID'
          columnsAutoWidth={true}
          showBorders={true}
          />
      </div>
    </div>
  );
}
