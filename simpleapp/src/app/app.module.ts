import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
	declarations: [
		AppComponent,
		NavMenuComponent,
		LayoutComponent,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(), 
		AppRoutingModule, 
		ReactiveFormsModule,
		FormsModule,
		CommonModule,
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
