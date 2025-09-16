$(() => {
  $('#gridContainer').dxDataGrid({
    dataSource: orders,
    keyExpr: 'ID',
    columnsAutoWidth: true,
    showBorders: true,
    filterRow: {
      visible: true,
    },
    searchPanel: {
      visible: true,
    },
    headerFilter: {
      visible: true,
    },
  });

  $('#gridContainer2').dxDataGrid({
    dataSource: [],
    keyExpr: 'ID',
    columnsAutoWidth: true,
    showBorders: true,
  });

  $('#button').dxButton({
    text: 'Get All Filtered And Sorted Data',
    onClick: getFilteredAndSortedData,
  });
});

function getFilteredAndSortedData() {
  const grid = $('#gridContainer').dxDataGrid('instance');
  const filterExpr = grid.getCombinedFilter(true);
  const dataSource = grid.getDataSource();
  const loadOptions = dataSource.loadOptions();

  dataSource
    .store()
    .load({ filter: filterExpr, sort: loadOptions.sort, group: loadOptions.group })
    .then((result) => {
      $('#gridContainer2').dxDataGrid('instance').option('dataSource', result);
    });
}
