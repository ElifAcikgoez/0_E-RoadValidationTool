import { Component, OnInit, Input } from '@angular/core';
import {Loader} from '@googlemaps/js-api-loader';
import { MapsAPILoader } from '@agm/core';
import { BackendService } from '../../app/shared/backend.service';
import { Data } from '../../app/shared/data';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import {map} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RouteplaningService} from '../shared/routeplaning.service';
import {element} from 'protractor';
@Component({
  selector: 'app-routeplaning',
  templateUrl: './routeplaning.component.html',
  styleUrls: ['./routeplaning.component.css'],
})
export class RouteplaningComponent implements OnInit {

  datas!: Data;
  start_v = '';
  ziel_v= '';
  strecke: any;
  public streckenlaenge_v = '';
  output = '';
  isApiLoaded = false;
  form!: FormGroup;


  // @ts-ignore
  map: google.maps.Map;

  options: any = {
    componentRestrictions: { country: 'DE' }
  }
   // @ts-ignore
  directionsRenderer: google.maps.DirectionsRenderer;
  // @ts-ignore
  directionsService: google.maps.DirectionsService;



  constructor(
      private mapsAPILoader: MapsAPILoader,
      private bs: BackendService,
      private fb: FormBuilder,
      private rs: RouteplaningService
  ) { }
  ngOnInit(): void {
    this.form = this.fb.group(
        {
          startControl: ['', Validators.required],
          zielControl: ['', Validators.required],
        }
    );


    this.mapsAPILoader.load().then(() =>{
      this.isApiLoaded = true
       this.map =  new google.maps.Map(<HTMLInputElement>document.getElementById('map'), {
        center: {lat: 51.233334, lng: 6.78333},
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });



      var poly = new google.maps.Polyline({
        map: this.map,
        strokeColor: 'green'
      });
      var points = new google.maps.MVCArray([
        new google.maps.LatLng(53.5510846, 9.9936818),
        new google.maps.LatLng(52.5200065, 13.40)],
      );
      poly.setPath(points);

      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
      this.directionsRenderer.setOptions({
        polylineOptions: {
          strokeColor: 'blue'
        }
      });
      this.directionsRenderer.setMap(this.map);
    })

  }
  handleAddressChangeStart(address: Address) {
    console.log(address.formatted_address)
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng())

    this.start_v = address.formatted_address
    this.rs.setStart(this.start_v);
    console.log( 'START'+ this.start_v)

  }

  handleAddressChangeZiel(address: Address) {
    console.log(address.formatted_address)
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng())

    const values = this.form.value;
    this.ziel_v = address.formatted_address
    this.rs.setZiel(this.ziel_v);
    console.log( 'ZIEL'+ this.ziel_v)
  }

  calcRoute(){
    const directionsDisplay = this.directionsRenderer;
    let b: any;
    var request = {
      origin: (<HTMLInputElement>document.getElementById("start")).value,
      destination: (<HTMLInputElement>document.getElementById("ziel")).value,
      travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
      unitSystem: google.maps.UnitSystem.METRIC
    }
    this.directionsService.route(request, (result, status) => {
      if (status == google.maps.DirectionsStatus.OK) {

        //Get distance and time
        var output = document.querySelector('#output');
        var km = document.querySelector('#km');

        // @ts-ignore
        output.innerHTML = "<div class='alert-info'>From: " + (<HTMLInputElement>document.getElementById("start")).value + ".<br />To: " +(<HTMLInputElement>document.getElementById("ziel")).value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";

        // @ts-ignore
        km = result?.routes[0].legs[0].distance?.text
        this.strecke = km;
        this.rs.setStrecke(this.strecke)

        console.log('result'+this.strecke)


        // @ts-ignore
        //display route
        // @ts-ignore
        directionsDisplay.setDirections(result);
      } else {
        //delete route from map
        directionsDisplay.setDirections({ routes: [] });// Get data about the mapped route

        //center map in London
        //show error message
        // @ts-ignore
      }
      // @ts-ignore
      // @ts-ignore

    });
  }


}
