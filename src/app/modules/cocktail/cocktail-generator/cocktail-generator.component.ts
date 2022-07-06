import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CocktailModel } from '../../../models/cocktail-model';
import { CocktailsSearchResultModel } from '../../../models/cocktails-search-result-model';
import { CocktailService } from '../../cocktail.service';
import { CocktailModule } from '../cocktail.module';

@Component({
	selector: 'app-cocktail-generator',
	templateUrl: './cocktail-generator.component.html',
})
export class CocktailGeneratorComponent implements OnInit {
	public cocktail: CocktailModel = {} as CocktailModel;
	public keys: string[] = Object.keys(CocktailModule);

	constructor(
		private readonly _httpClient: HttpClient,
		private readonly _cocktailService: CocktailService
	) {}

	ngOnInit(): void {}

	public loadRandomCocktail(): void {
		this._cocktailService.loadRandomCocktail().subscribe(({ drinks }) => {
			this.cocktail =
				drinks.length !== 0 ? drinks[0] : ({} as CocktailModel);
		});
	}
}
