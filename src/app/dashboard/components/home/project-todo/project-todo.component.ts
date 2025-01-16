import {
	CdkDrag,
	CdkDragDrop,
	CdkDropList,
	CdkDropListGroup,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

/** @title Drag&Drop connected sorting group */
@Component({
	selector: 'dash-project-todo',
	templateUrl: 'project-todo.component.html',
	imports: [CdkDropListGroup, CdkDropList, CdkDrag],
})
export class ProjectTodoComponent {
	todo: string[] = [
		'Prepare project proposal',
		'Schedule kickoff meeting',
		'Gather project requirements',
		'Assign tasks to team members',
	];

	inProgress: string[] = ['Design product prototype', 'Conduct market research', 'Develop project timeline'];

	done: string[] = [
		'Finalize project budget',
		'Complete risk assessment',
		'Conduct team training',
		'Review and finalize project documentation',
	];

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
		}
	}
}
