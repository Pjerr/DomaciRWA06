import { Component, Input, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styleUrls: ['./band-details.component.scss'],
})
export class BandDetailsComponent implements OnInit {
  @Input() band: Band | null = null;

  constructor() {}

  ngOnInit(): void {}
}
