<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/542606441/25.1.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1118438)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->

# DataGrid for DevExtreme - How to obtain all filtered and sorted rows

This example demonstrates how to obtain all filtered and sorted rows from the DataGrid component.

To test this functionality, you can filter or sort data in the UI and press "Get All Filtered And Sorted Data". See results in the second grid.

To implement this functionality, access a bound Store object and pass [loadOptions](https://js.devexpress.com/Documentation/ApiReference/Data_Layer/DataSource/Methods/#loadOptions) along with the [combined filtering expression](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#getCombinedFilterreturnDataField) to its load() method. 

<div align="center"><img alt="DevExtreme DataGrid - How to obtain all filtered and sorted rows" src="datagrid-filtered-data.png" /></div>

## Files to Review

- **jQuery**
    - [src.js](jQuery/src/index.js)
- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **Vue**
    - [Home.vue](Vue/src/components/HomeContent.vue)
- **React**
    - [App.tsx](React/src/App.tsx)
- **NetCore**    
    - [Index.cshtml](ASP.NET%20Core/Views/Home/Index.cshtml)

## Documentation

- [getDataSource()](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#getDataSource)
- [DataSource.store()](https://js.devexpress.com/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store)


<!-- feedback -->
## Does This Example Address Your Development Requirements/Objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-datagrid-get-all-filtered-data&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-datagrid-get-all-filtered-data&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
