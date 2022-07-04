import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, PreloadAllModules, RouterModule } from "@angular/router";
import { AlertModule } from "ngx-bootstrap/alert";

import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routerConfig: ExtraOptions = {
	preloadingStrategy: PreloadAllModules,
	scrollPositionRestoration: 'enabled'
};

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes, routerConfig),
		AlertModule.forRoot(),
		BrowserAnimationsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
