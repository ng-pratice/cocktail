import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { CocktailModel } from "../../../models/cocktail-model";
import { CocktailsSearchResultModel } from "../../../models/cocktails-search-result-model";
import { CocktailModule } from "../cocktail.module";

@Component({
	selector: 'app-cocktail-generator',
	templateUrl: './cocktail-generator.component.html'
})
export class CocktailGeneratorComponent implements OnInit {

	public cocktail: CocktailModel = {} as CocktailModel;
	public keys: string[] = Object.keys(CocktailModule)

	constructor(private readonly _httpClient: HttpClient) {
	}

	ngOnInit(): void {
	}

	public loadRandomCocktail(): void {
		const base = 'https://www.thecocktaildb.com/';
		this._httpClient.get<CocktailsSearchResultModel>(base + 'api/json/v1/1/random.php')
			.subscribe(({ drinks }) => {
				this.cocktail = drinks.length !== 0
					? drinks[0]
					: {} as CocktailModel;
			})
	}
}
