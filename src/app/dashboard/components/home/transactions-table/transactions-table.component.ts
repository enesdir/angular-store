import { DataSource } from '@angular/cdk/collections';
import { CdkTableModule } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { transactionData } from '@/dashboard/mocks/transactionData';
import { Transaction } from '@/dashboard/models/transaction';

@Component({
	selector: 'dash-transactions-table',
	templateUrl: 'transactions-table.component.html',
	imports: [CdkTableModule],
})
export class TransactionTableComponent {
	displayedColumns: string[] = ['id', 'description', 'category', 'amount', 'date'];
	dataSource = new ExampleDataSource();
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source can retrieve its data in
 * any way. In this case, the data source is provided a reference to a common data base, ExampleDatabase. It is not the
 * data source's responsibility to manage the underlying data. Instead, it only needs to take the data and send the
 * table exactly what should be rendered.
 */
export class ExampleDataSource extends DataSource<Transaction> {
	/** Stream of data that is provided to the table. */
	data = new BehaviorSubject<Transaction[]>(transactionData);

	/** Connect function called by the table to retrieve one stream containing the data to render. */
	connect(): Observable<Transaction[]> {
		return this.data;
	}

	disconnect() {}
}
