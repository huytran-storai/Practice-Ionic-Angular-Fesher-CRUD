import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageStorePage } from './manage-store.page';


const routes: Routes = [
	{
		path: '',
		component: ManageStorePage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [],
})
export class ManageStorePageRoutingModule { }
