import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	standalone: true,
	imports: [NgClass, NgFor],
})
export class PaginationComponent {
	@Input() currentPage: number = 1;
	@Input() totalPages: number = 0;
	@Input() totalItems: number = 0;
	@Input() itemsPerPage: number = 10;
	@Output() pageChange = new EventEmitter<number>();

	get pages(): number[] {
		return Array.from({ length: this.totalPages }, (_, i) => i + 1);
	}

	gotoPrevious() {
		if (this.currentPage > 1) {
			this.pageChange.emit(this.currentPage - 1);
		}
	}

	gotoNext() {
		if (this.currentPage < this.totalPages) {
			this.pageChange.emit(this.currentPage + 1);
		}
	}

	changePage(newPage: number) {
		this.pageChange.emit(newPage);
	}

	getRangeStart(): number {
		return (this.currentPage - 1) * this.itemsPerPage + 1; // Calculate the start value of the range
	}

	getRangeEnd(): number {
		const end = this.currentPage * this.itemsPerPage; // Calculate the end value of the range
		return Math.min(end, this.totalItems);
	}
}
