import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  userDatas:any=[];

  show:boolean= true;

  action="Hide";

 
  constructor(private data:DataService,
    ) { }

  ngOnInit(): void {

    this.data.get().subscribe(data => {
      this.userDatas = data;
      console.log(data);
    });


  }


  hide=()=>{
    if(this.show===true ){

      this.show=false;
      this.action="Show"
    } else if (this.show===false){
      this.show=true;
      this.action="Hide"
    }
  }

}
