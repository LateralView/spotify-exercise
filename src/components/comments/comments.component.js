import template from './comments.html';

export const CommentsComponent = {
  template,
  controller: class CommentsComponent {
    
    constructor(CommentsService) {
      console.log('CommentsService in COMPONENT:', CommentsService);
      'ngInject';
      this.commentsService = CommentsService;
      console.log('CommentsComponent: CONSTRUIDO');
    }
    
    $onInit() {
      console.log('CommentsComponent: INICIADO');
      this.comments = [];
      this.commentsService.getComments('rata blanca').then((response) => {
        console.log('RESPONSE:', response);
        this.Comments = response;
      });
      console.log('Comments from Service:', this.Comments);