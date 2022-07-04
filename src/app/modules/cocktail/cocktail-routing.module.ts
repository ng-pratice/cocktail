import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CocktailGeneratorComponent } from "./cocktail-generator/cocktail-generator.component";
import { CocktailRouterComponent } from "./cocktail-router.component";

const routes: Routes = [
	{
		path: '',
		component: CocktailRouterComponent,
		children: [
			{
				path: '',
				component: CocktailGeneratorComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CocktailRoutingModule {
}
