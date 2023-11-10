import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  comments: string[] = [];
  replyStates: boolean[] = [];
  currentDate!: Date; // Declare currentDate as a Date object

  replyText: string = '';

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.comments$.subscribe((comments) => {
      this.comments = comments;
      this.replyStates = Array(this.comments.length).fill(false);
    });

    // Initialize currentDate as a Date object
    this.currentDate = new Date();
  }

  toggleComment(index: number) {
    event?.preventDefault();
    this.replyStates[index] = !this.replyStates[index];
  }

  submitReply(index: number, replyText: string): void {
    const reply = `${this.comments[index].split(':')[0]} replied: ${replyText}`;
    this.commentService.addComment(reply);
    this.replyText = '';
    this.replyStates[index] = false;
  }
}
