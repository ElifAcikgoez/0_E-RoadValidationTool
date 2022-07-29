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
  output = '';
  isApiLoaded = false;
  options: any = {
    componentRestrictions: { country: 'DE' }
  }
  private directionsRenderer: any;



  constructor(
      private mapsAPILoader: MapsAPILoader

  ) { }
  ngOnInit(): void {
    this.mapsAPILoader.load().then(() =>{
      this.isApiLoaded = true
       let map =  new google.maps.Map(<HTMLInputElement>document.getElementById('map'), {
        center: {lat: 51.233334, lng: 6.78333},
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      this.directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
      this.directionsRenderer.setOptions({
        polylineOptions: {
          strokeColor: 'blue'
        }
      });
      this.directionsRenderer.setMap(map);
    })

  }
  handleAddressChange(address: Address) {
    console.log(address.formatted_address)
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng())
  }

  calcRoute(){

    let directionsService = new google.maps.DirectionsService();
    const directionsDisplay = this.directionsRenderer;
    var request = {
      origin: (<HTMLInputElement>document.getElementById("start")).value,
      destination: (<HTMLInputElement>document.getElementById("ziel")).value,
      travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
      unitSystem: google.maps.UnitSystem.METRIC
    }
    directionsService.route(request, function (result, status) {
      if (status == google.maps.DirectionsStatus.OK) {

        //Get distance and time
        var output = document.querySelector('#output');
        // @ts-ignore
        output.innerHTML = "<div class='alert-info'>From: " + (<HTMLInputElement>document.getElementById("start")).value + ".<br />To: " +(<HTMLInputElement>document.getElementById("ziel")).value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";

        //display route
        // @ts-ignore
        directionsDisplay.setDirections(result);
      } else {
        //delete route from map
        directionsDisplay.setDirections({ routes: [] });
        //center map in London
        //show error message
        // @ts-ignore
      }
    });

  }
}
