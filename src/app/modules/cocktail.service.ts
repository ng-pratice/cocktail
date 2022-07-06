import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CocktailsSearchResultModel } from '../models/cocktails-search-result-model';

const BASE_URL = 'https://www.thecocktaildb.com/';

@Injectable({
	providedIn: 'root',
})
export class CocktailService {
	constructor(private _httpClient: HttpClient) {}

	public loadRandomCocktail() {
		return this._httpClient.get<CocktailsSearchResultModel>(
			BASE_URL + 'api/json/v1/1/random.php'
		);
	}

	public searchCocktails(query: string) {
		return this._httpClient
			.get<CocktailsSearchResultModel>(
				`${BASE_URL}api/json/v1/1/search.php?s=${query}`
			);
	}
}
