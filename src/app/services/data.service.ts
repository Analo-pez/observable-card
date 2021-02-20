import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  

export class DataService{
    dataUser=[{ id: 1, name: 'Nora M. Buchanan', img:'../images/perfil.jpg', email: 'invision.invisionapp.com', phone: "+144-3412-4422", location:'New York, NY', interactions:4,  city1: "Jackson Heights",
    street1: "37-27 74th Street",  city2: "Greenpoint",
    street2: "81 Gate St Brooklyn",
    distance: "12.3 km",
    time: "42 min",
    price: "$34.20",
    energy:"12.4 kWh"},
    { id: 2, name: 'Mona Lisa',  email: 'monita.invisionapp.com', phone: "+555-3412-4422", location:'Manhattan, NY', interactions:2,  city1: "Chicago",
    street1: "Barbara Street",  city2: "Linkin Park",
    street2: "45-49 68th Street",
    distance: "9.3 km",
    time: "31 min",
    price: "$25.5",
    energy:"10.4 kWh"},
    { id: 3, name: 'Lisa Simpson', img:'https://www.pikpng.com/transpng/hThxRhx/',   email: 'lisa.invisionapp.com', phone: "+133-2512-4322", location:'Los Angeles, CA', interactions:6,  city1: "San Francisco",
    street1: "25-31 15th Street",  city2: "Los Angeles",
    street2: "12-18 25th Avenue",
    distance: "15.23 km",
    time: "59 min",
    price: "$42.5",
    energy:"16.3 kWh"}
];
    get() {
      return of(this.dataUser);
    }
  }
  