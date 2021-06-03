import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Band } from 'src/app/models/band';
import { Record } from 'src/app/models/record';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss'],
})
export class BandsComponent implements OnInit {
  constructor(private bandService: BandsService) {}

  band: Observable<Band> = of();
  id: any;

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    console.log(this.id);
    this.band = this.bandService.getOneByID(this.id);
  }
}
