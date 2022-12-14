import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class RouteplaningService {
  start:any;
  ziel:any;
  streckenlaenge: any;

  constructor() { }

  setStart(start:string){
    this.start = start;
    console.log('start rp: ' +this.start)


  }
  setZiel(ziel:string){
    this.ziel = ziel;
    console.log('ziel rp: ' +this.ziel)

  }
  setStrecke(strecke:string){
    this.streckenlaenge = strecke;
    console.log('strecke rp: ' +this.streckenlaenge)

  }

}
