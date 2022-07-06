import { Component, OnDestroy, OnInit } from '@angular/core';
import {
	debounceTime,
	distinctUntilChanged,
	map,
	of,
	Subject,
	Subscription,
	switchMap,
	tap,
} from 'rxjs';
import { CocktailsSearchResultModel } from 'src/app/models/cocktails-search-result-model';
import { CocktailService } from 'src/app/modules/cocktail.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
	private readonly _searchQueryChanged: Subject<string> =
		new Subject<string>();
	private readonly _cocktailsSub = new Subscription();

	public cocktails: CocktailsSearchResultModel =
		{} as CocktailsSearchResultModel;
	public queryNotFound: Boolean = false;

	constructor(private readonly _cocktailService: CocktailService) {}

	ngOnInit(): void {
		this._searchQueryChanged
			.pipe(
				debounceTime(300),
				distinctUntilChanged(),
				switchMap((query) => {
					this.queryNotFound = false;

					if (!query) {
						return of({ drinks: [] });
					}

					return this._cocktailService.searchCocktails(query);
				})
			)
			.subscribe({
				next: (cocktails) => {
					if (cocktails.drinks === null) {
						this.queryNotFound = true;
					}

					this.cocktails = cocktails;
				},
			});
	}

	ngOnDestroy(): void {
		if (this._cocktailsSub) {
			this._cocktailsSub.unsubscribe();
		}
	}

	onSearchInputChanged(query: string) {
		this._searchQueryChanged.next(query);
	}
}
