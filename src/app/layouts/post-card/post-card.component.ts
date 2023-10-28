import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  constructor() {}

  @Input() postData!: any;
  ngOnInit(): void {
    console.log('component is initialized');

    console.log('Received Data:', this.postData);
  }
}
