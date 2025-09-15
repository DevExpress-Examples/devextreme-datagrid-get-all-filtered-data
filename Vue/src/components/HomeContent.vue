<script setup lang="ts">
import { ref } from 'vue';

import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { DxDataGrid, DxFilterRow, DxHeaderFilter, DxSearchPanel } from 'devextreme-vue/data-grid';
import { DxButton } from 'devextreme-vue/button';
import type { DxDataGrid as DxDataGridType } from 'devextreme-vue/data-grid';
import { isItemsArray } from 'devextreme-vue/common/data';
import notify from 'devextreme/ui/notify';
import { getOrders, type Order } from '../data';

const orders = getOrders();
const filteredData = ref<Order[]>([]);
const dataGridRef = ref<DxDataGridType | null>(null);

function getFilteredAndSortedData(): void {
  const gridInstance = dataGridRef.value?.instance;
  if (!gridInstance) return;

  const filterExpr = gridInstance.getCombinedFilter(true);
  const dataSource = gridInstance.getDataSource();
  const loadOptions = dataSource.loadOptions();

  dataSource
    .store()
    .load({ filter: filterExpr, sort: loadOptions.sort, group: loadOptions.group })
    .then((result) => {
      if (isItemsArray(result)) {
        filteredData.value = result as Order[];
      }
    })
    .catch((error: unknown) => notify(String(error), 'error', 1000));
}
</script>

<template>
  <div>
    <DxButton
      @click="getFilteredAndSortedData"
      text="Get All Filtered And Sorted Data"
    />
    <DxDataGrid
      id="gridContainer"
      ref="dataGridRef"
      :data-source="orders"
      key-expr="ID"
      :show-borders="true"
    >
      <DxFilterRow :visible="true"/>
      <DxHeaderFilter :visible="true"/>
      <DxSearchPanel :visible="true"/>
    </DxDataGrid>
    <br>
    <div class="title">Loaded data</div>
    <br>
    <DxDataGrid
      :data-source="filteredData"
      key-expr="ID"
      :show-borders="true"
    />
  </div>
</template>

<style scoped>
.title {
  width: 100%;
  text-align: center;
  font-family: "Helvetica Neue","Segoe UI",helvetica,verdana,sans-serif;
  text-decoration: underline;
}
</style>
