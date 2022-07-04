import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { CocktailGeneratorComponent } from './cocktail-generator/cocktail-generator.component';
import { CocktailRouterComponent } from './cocktail-router.component';
import { CocktailRoutingModule } from "./cocktail-routing.module";

@NgModule({
	declarations: [
		CocktailRouterComponent,
		CocktailGeneratorComponent
	],
	imports: [
		CommonModule,
		CocktailRoutingModule,
		MatButtonModule,
	],
	providers: [
	]
})
export class CocktailModule {
}
