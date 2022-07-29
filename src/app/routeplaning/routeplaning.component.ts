import { Component, OnInit } from '@angular/core';
import {Loader} from '@googlemaps/js-api-loader';
import { MapsAPILoader } from '@agm/core';

import { Address } from 'ngx-google-places-autocomplete/objects/address';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-routeplaning',
  templateUrl: './routeplaning.component.html',
  styleUrls: ['./routeplaning.component.css']
})
export class RouteplaningComponent implements OnInit {
  isApiLoaded = false;
  options: any = {
    componentRestrictions: { country: 'DE' }
  }

  constructor(
      private mapsAPILoader: MapsAPILoader
  ) { }
  ngOnInit(): void {
    this.mapsAPILoader.load().then(() =>{
      this.isApiLoaded = true
      new google.maps.Map(<HTMLInputElement>document.getElementById('map'), {
        center: {lat: 51.233334, lng: 6.78333},
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    })

  }
  handleAddressChange(address: Address) {
    console.log(address.formatted_address)
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng())
  }
}
