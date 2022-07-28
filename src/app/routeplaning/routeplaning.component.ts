import { Component, OnInit } from '@angular/core';
import {Loader} from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-routeplaning',
  templateUrl: './routeplaning.component.html',
  styleUrls: ['./routeplaning.component.css']
})
export class RouteplaningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const loader = new Loader({
      apiKey: 'AIzaSyDbsGq82noLvR6R3I89AN3oQmHBD6XLDoM'
    });
    loader.load().then(() => {
      // @ts-ignore
      // tslint:disable-next-line:no-unused-expression
      new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.233334, lng: 6.78333},
        zoom: 6
      });
    });
  }

}
