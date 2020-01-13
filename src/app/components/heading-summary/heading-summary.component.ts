import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heading-summary',
  templateUrl: './heading-summary.component.html',
  styleUrls: ['./heading-summary.component.css']
})
export class HeadingSummaryComponent implements OnInit {

  @Input() total: string = '';

  constructor() { }

  ngOnInit() {
  }

}
