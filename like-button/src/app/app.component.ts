import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'like-button';
  tweet = {
    body: 'Do you smell what the Rock is cooking?',
    likesCount: 10,
    isLiked: true,
  }
}
