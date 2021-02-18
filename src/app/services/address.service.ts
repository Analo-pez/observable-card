import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  

export class AddressService{
    address=[{
      city: "Chicago",
      street: "37-27 74th Street"
    },
    {
      city: "Tinley Park",
      street: "Illinois"
    }];
    get() {
      return of(this.address);
    }
  }
  