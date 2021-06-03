import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Band } from 'src/app/models/band';
import { Record } from '../../models/record';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.scss'],
})
export class RecordDetailsComponent implements OnInit {
  @Input() record: Record | null = null;

  constructor() {}

  ngOnInit(): void {}

  showBand() {
    if (this.record) {
      localStorage.setItem("id",this.record.id.toString());
    }
  }
}
