import { Component, OnInit } from '@angular/core';
import { ITask } from '../interfaces/task.interface';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	todoLst: ITask[] = [];
	selectedTask!: ITask;

	constructor() { }

	ngOnInit() {

	}

	add(newTodo: ITask) {
		this.todoLst.push(newTodo);
	}

	onDelete(id: ITask) {
		this.todoLst = this.todoLst.filter((todoList: ITask) => todoList.id !== id);
	}

	onSelectTask(task: ITask) {
		this.selectedTask = task;
		console.log("----> Check Selected Task",this.selectedTask);
	}
}
