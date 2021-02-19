import { Component, OnInit } from '@angular/core';
import { AddressService } from './services/address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  dataNew;


  constructor(private data: AddressService
    ) { }

  ngOnInit(): void {
    this.data.get().subscribe(data => {
      this.dataNew = data
    });
   
  }



}
