import template from './album-list-item.html';

export const AlbumListItemComponent = {
	template,
	bindings: {
		album: '<'
	},
	controller: class AlbumListItemComponent{
		constructor(){
			this.enableComments = false;
		}

		toggleComments(){
			this.enableComments = !this.enableComments;
		}
	}
}