import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reply-form',
  templateUrl: './reply-form.component.html',
  styleUrls: ['./reply-form.component.css'],
})
export class ReplyFormComponent {
  @Output() replySubmitted = new EventEmitter<string>();
  replyText: string = '';

  submitReply(): void {
    this.replySubmitted.emit(this.replyText);
    this.replyText = '';
  }
}
