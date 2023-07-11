import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { ListTodoComponent } from '../list-todo/list-todo.component';
import { HomePageRoutingModule } from './home-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddButtonComponent } from '../add-button/add-button.component';
import { ListItemComponent } from '../list-item/list-item.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePageRoutingModule,
		ReactiveFormsModule
	],
	declarations: [
		HomePage,
		ListTodoComponent,
		AddButtonComponent,
		ListItemComponent
	]
})
export class HomePageModule { }
