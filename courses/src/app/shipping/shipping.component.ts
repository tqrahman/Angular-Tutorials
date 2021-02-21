import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  constructor() { }
  @Input('title') title: string;
  isExpanded: boolean = true;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  

  ngOnInit(): void {
  }

}
