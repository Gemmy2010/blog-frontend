import { Component } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent {
  name: string = '';
  comment: string = '';

  constructor(private commentService: CommentService) {}

  onSubmit(commentForm: any): void {
    const { name, comment } = commentForm.value;
    const formattedComment = `${name}: ${comment}`;
    this.commentService.addComment(formattedComment);

    console.log('Name:', name);
    console.log('Comment:', comment);

    this.name = '';
    this.comment = '';
  }
}
