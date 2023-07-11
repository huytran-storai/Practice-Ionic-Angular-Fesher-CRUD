import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITask } from '../interfaces/task.interface';

@Component({
	selector: 'app-add-button',
	templateUrl: './add-button.component.html',
	styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent implements OnInit, OnChanges {

	form!: FormGroup;
	@Input() selectedTask!: ITask;
	@Output() todoAdded: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		private formBuilder: FormBuilder,
	) {

	}

	ngOnInit() {
		this.form = this.formBuilder.group({
			addTodo: ['', [Validators.required]],
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.selectedTask = changes['selectedTask'].currentValue;
		this.setFormData();
	}

	private setFormData() {
		this.form = this.formBuilder.group({
			addTodo: [this.selectedTask.name, [Validators.required]],
		});
	}

	get addTodoCtrl() {
		return this.form.get('addTodo');
	}

	add() {
		if (this.selectedTask) {
			this.selectedTask.name = this.form?.value.addTodo;
			this.form?.reset();
			this.selectedTask = {};
		} else {
			const newTodo: ITask = {
				id: (Math.floor(Math.random() * 1000) + 1).toString(),
				name: this.form?.value.addTodo
			};
			this.todoAdded.emit(newTodo);
			this.form?.reset();
		}
	} 

}
