import template from './search.html';

export const SearchComponent = {
	template,
	bindings: {
		onSearch: '&'
	},
	controller: class SearchComponent{
		
		constructor(){}

		$onInit(){
			this.album = '';			
		}

		search(){
			this.onSearch({$event: {album: this.album}});
		}
	}
}