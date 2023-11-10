import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor() {}
  private commentsSubject = new BehaviorSubject<string[]>([]);
  comments$: Observable<string[]> = this.commentsSubject.asObservable();

  addComment(comment: string): void {
    const currentComments = this.commentsSubject.value;
    const newComments = [...currentComments, comment];
    this.commentsSubject.next(newComments);
  }
}
