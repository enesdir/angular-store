import { Component } from '@angular/core';

import { HomeHeaderComponent } from '@/dashboard/components/home/home-header/home-header.component';
import { ProjectTodoComponent } from '@/dashboard/components/home/project-todo/project-todo.component';
import { TransactionTableComponent } from '@/dashboard/components/home/transactions-table/transactions-table.component';
import { nftData } from '@/dashboard/mocks/nftData';
import { Nft } from '@/dashboard/models/nft';

@Component({
	selector: 'dash-home-page',
	templateUrl: './home.component.html',
	standalone: true,
	imports: [HomeHeaderComponent, ProjectTodoComponent, TransactionTableComponent],
})
export default class HomePageComponent {
	nft: Array<Nft>;

	constructor() {
		this.nft = nftData;
	}
}
