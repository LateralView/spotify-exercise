import template from './album-search.html';

export const AlbumSearchComponent = {
	template,
	bindings: {
		onChange: '&'
	},
	controller: class AlbumSearchComponent{
		constructor(){
			this.album = '';			
		}
	}
}