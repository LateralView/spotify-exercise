export default class CommentListComponent{
  $onInit(){
  	this.max = 5;
  }

  showMoreComments() {
    if(this.comments.length > this.max){
    	this.max += 5;
    }
    else{
    	this.max = this.comments.length;
    }
  }

}