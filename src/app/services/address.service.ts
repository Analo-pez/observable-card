import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  

export class AddressService{
    address=[{ id: 1, name: 'Nora M. Buchanan',  email: 'invision.invisionapp.com', phone: "+144-3412-4422", location:'New York, NY', interactions:4,  city1: "Chicago",
    street1: "37-27 74th Street",  city2: "Tinley Park",
    street2: "Illinois",
    distance: "12.3 km",
    time: "42 min",
    price: "$25.5",
    energy:"12.4 kWh"},
    { id: 2, name: 'Mona Lisa',  email: 'invision2.invisionapp.com', phone: "+555-3412-4422", location:'Manhattan, NY', interactions:2,  city1: "London",
    street1: "Barbara Street",  city2: "Linkin Park",
    street2: "New York",
    distance: "12.3 km",
    time: "42 min",
    price: "$25.5",
    energy:"12.4 kWh"},
    { id: 3, name: 'Lisa Simpson',  email: 'invision2.invisionapp.com', phone: "+555-3412-4422", location:'Manhattan, NY', interactions:2,  city1: "London",
    street1: "Barbara Street",  city2: "Linkin Park",
    street2: "New York",
    distance: "12.3 km",
    time: "42 min",
    price: "$25.5",
    energy:"12.4 kWh"}
];
    get() {
      return of(this.address);
    }
  }
  