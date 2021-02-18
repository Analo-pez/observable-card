import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  
  export class DataService {
    users: {}=
      { id: 1, name: 'Nora M. Buchanan',  email: 'invision.invisionapp.com', phone: "+144-3412-4422", location:'New York, NY', interactions:4 };
    get() {
      return of(this.users);
    }
  }

    