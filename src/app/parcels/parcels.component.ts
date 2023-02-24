import { Component } from '@angular/core';
import { Parcel } from '../interface/parcelInterface';
import { ParceldeliveryService } from '../parceldelivery.service';


@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent {

  parcel: Parcel[]=[]
  
  constructor(private service:ParceldeliveryService){

    this.parcel = this.service.parcels
    console.log(this.parcel);  
  }
   
}
