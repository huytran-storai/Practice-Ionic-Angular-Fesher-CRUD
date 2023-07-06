import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../interfaces/task.interface';


@Component({
	selector: 'app-list-todo',
	templateUrl: './list-todo.component.html',
	styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {

	@Input() todoLst!: ITask[];
	@Output() deleteList: EventEmitter<string> = new EventEmitter<string>();
	@Output() selectTask: EventEmitter<string> = new EventEmitter<string>();
	editingTask: ITask | any;

	constructor() { }

	ngOnInit() {
	}

	onDelete(item: string) {
		this.deleteList.emit(item)
		console.log("----> Deleted", item)
	}

	edit(task: ITask) {
		this.editingTask = task;
		this.selectTask.emit(this.editingTask);
	}

}
