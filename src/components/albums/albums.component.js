import template from './albums.html';

export const AlbumsComponent = {
  template,
  controller: class AlbumsComponent {
    
    constructor(AlbumsService) {
      console.log('AlbumsService in COMPONENT:', AlbumsService);
      'ngInject';
      this.albumsService = AlbumsService;
      console.log('AlbumsComponent: CONSTRUIDO');
    }
    
    $onInit() {
      console.log('AlbumsComponent: INICIADO');
      this.albums = [];
      this.albumsService.getAlbums('rata blanca').then((response) => {
        console.log('RESPONSE:', response);
        this.albums = response;
      });
      console.log('Albums from Service:', this.albums);
      /*
      this.newTodo = {
        title: '',
        selected: false
      };
      this.todos = [];
      this.todoService.getTodos().then(response => this.todos = response);
      */
    }
    /*
    addTodo({ todo }) {
      if (!todo) return;
      this.todos.unshift(todo);
      this.newTodo = {
        title: '',
        selected: false
      };
    }
    */
  }
};