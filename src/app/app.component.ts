import { Component } from '@angular/core';
import { customers } from './customers';
import { Customer } from './model';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
                [kendoGridBinding]="gridView"
                [pageable]="true"
                [pageSize]="5"
            >
            <kendo-grid-column field="Id" title="ID"> </kendo-grid-column
            ><kendo-grid-column field="CompanyName" title="Company name"> </kendo-grid-column>
            <kendo-grid-column field="ContactName" title="Contact name"> </kendo-grid-column>
            <kendo-grid-column field="Address" title="Address"> </kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridView: Customer[] = customers;
}
