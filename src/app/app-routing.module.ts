import { Routes } from '@angular/router';
import { CocktailRoutes } from "./common/routes";

export const appRoutes: Routes = [

	//redirect if empty
	{ path: '', pathMatch: 'full', redirectTo: CocktailRoutes.Root },

	//cocktail generator module
	{
		path: CocktailRoutes.Root,
		loadChildren: () => import('src/app/modules/cocktail/cocktail.module').then(m => m.CocktailModule)
	}
];
