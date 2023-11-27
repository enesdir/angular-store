import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTodoComponent } from './project-todo.component';

describe('ProjectTodoComponent', () => {
	let component: ProjectTodoComponent;
	let fixture: ComponentFixture<ProjectTodoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProjectTodoComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProjectTodoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
