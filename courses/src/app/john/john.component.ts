import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-john',
  templateUrl: './john.component.html',
  styleUrls: ['./john.component.css']
})
export class JohnComponent implements OnInit {
  task = {
    title: 'Review Applications',
    assignee: {
      name: 'John Smith'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
