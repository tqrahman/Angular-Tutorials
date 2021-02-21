import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  archives = [
    { year: 2020, month: 1},
    { year: 2020, month: 2},
    { year: 2020, month: 3},
  ];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}