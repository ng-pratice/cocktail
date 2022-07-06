import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';

import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './shared/search/search.component';
import { FormsModule } from '@angular/forms';

const routerConfig: ExtraOptions = {
	preloadingStrategy: PreloadAllModules,
	scrollPositionRestoration: 'enabled',
};

@NgModule({
	declarations: [AppComponent, NavigationComponent, SearchComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes, routerConfig),
		AlertModule.forRoot(),
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

