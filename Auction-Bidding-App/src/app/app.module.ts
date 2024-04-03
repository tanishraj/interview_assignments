import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ProductComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot([
			{ path : '', component : HomeComponent },
			{ path: 'product/:id', component: ProductComponent }
		])
	],
	providers: [
		ProductService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
