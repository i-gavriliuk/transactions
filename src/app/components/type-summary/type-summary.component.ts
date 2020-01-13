import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-summary',
  templateUrl: './type-summary.component.html',
  styleUrls: ['./type-summary.component.css']
})
export class TypeSummaryComponent implements OnInit {

  @Input() name: string = '';
  @Input() amount: string = '';
  @Input() tag: string = '';

  constructor() { }

  ngOnInit() {
  }

}
