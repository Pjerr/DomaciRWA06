import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Record } from 'src/app/models/record';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  constructor(private recordsService:RecordsService) { }

  records:Observable<Record[]> = of([]);

  ngOnInit(): void {
    this.records = this.recordsService.getAll();
  }

}
