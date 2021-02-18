import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { TripService } from '../../services/trip.service';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  start:any= {};
  finish:any={};
  trip:any={};

  constructor(private data: AddressService,
    private infoTrip: TripService
    ) { }

  ngOnInit(): void {
    this.data.get().subscribe(data => {
      this.start = data[0];
      this.finish = data[1];
    });
    this.infoTrip.get().subscribe(data => {
      this.trip = data;
    });
  }

}
