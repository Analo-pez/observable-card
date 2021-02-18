import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  

export class TripService{
    address={
    distance: "12.3 km",
    time: "42 min",
    price: "$25.5",
    energy:"12.4 kWh"
    }
    get() {
      return of(this.address);
    }
  }
  