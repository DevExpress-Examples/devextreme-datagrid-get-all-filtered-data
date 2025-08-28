<template>
  <div>
    <DxButton @click="getFilteredAndSortedData" text="Get All Filtered And Sorted Data">
    </DxButton>
    <DxDataGrid
        id="gridContainer"
        :ref="dataGridRefName"
        :data-source="orders"
        key-expr="ID"
        :show-borders="true"
    >
      <DxFilterRow :visible="true" />
      <DxHeaderFilter :visible="true" />
      <DxSearchPanel :visible="true" />
    </DxDataGrid>
    <br/>
    <div className="title">Loaded data</div>
    <br/>
    <DxDataGrid
        :data-source="ds"
        key-expr="ID"
        :show-borders="true"
    >
    </DxDataGrid>
  </div>
</template>
<script>
import {
  DxDataGrid,
  DxHeaderFilter,
  DxSearchPanel,
  DxFilterRow,
} from 'devextreme-vue/data-grid';
import {DxButton} from "devextreme-vue/button"
import service from "./data.js";

export default {
  components: {
    DxDataGrid,
    DxHeaderFilter,
    DxSearchPanel,
    DxFilterRow,
    DxButton
  },
  data() {
    return {
      orders: service.getOrders(),
      dataGridRefName: 'dataGrid',
      ds: []

    };
  },
  methods: {
    getFilteredAndSortedData(){

      const grid = this.dataGrid;
      const filterExpr = grid.getCombinedFilter(true);
      const dataSource = grid.getDataSource();
      const loadOptions = dataSource.loadOptions();

      dataSource
          .store()
          .load({ filter: filterExpr, sort: loadOptions.sort, group: loadOptions.group })
          .then((result) => {
            // your code...
            this.ds = result;
          });
    }
  },
  computed: {
    dataGrid: function() {
      return this.$refs[this.dataGridRefName].instance;
    },
  }
};
</script>
<style >
.title {
  width: 100%;
  text-align: center;
  font-family: "Helvetica Neue","Segoe UI",helvetica,verdana,sans-serif;
  text-decoration: underline;
}
</style>
