import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../shared/backend.service';
import { Data } from '../../shared/data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {RouteplaningService} from '../../shared/routeplaning.service';
import { FormControl, FormGroupDirective, NgForm, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatSelect} from "@angular/material/select";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
// Error when invalid control is dirty, touched, or submitted

export class CreateComponent implements OnInit {

  klasse_v = '';
  achse_v= '';
  diesel_v = '';
  schadstoff_v ='';
  start='start';

  klassen_array: any[] = ['< 7,5t (nicht mautpflichtig)','7,5t - 11,99t','12t - 18t','>18t']
  achsen_array: any[] = ['1','2','3','4','5','> 5']
  schadstoff_array: any[]= ['Euro 0', 'Euro 1', 'Euro 2','Euro 3','Euro 4','Euro 5','Euro 6']

  constructor(private route: ActivatedRoute,
              private bs: BackendService,
              private fb: FormBuilder,
              private router: Router,
              private rps: RouteplaningService
             ) {




  }
  form!: FormGroup;
  data! : Data;

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        achseControl: ['', Validators.required],
        dieselControl: ['', Validators.required],
        schadstoffControl: ['', Validators.required],
        gewichtControl: ['', Validators.required],
      }
    );
  }

  onFormSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      return;
    }
  }

  changeAchse(value: any) {
    this.achse_v = value
    console.log("SELECTED ACHSE "+value);
  }
  changeSchadstoff(value: any) {
    this.schadstoff_v = value
    console.log("SELECTED ACHSE "+value);
  }
  changeKlasse(value: any) {
    this.klasse_v = value
    console.log("SELECTED ACHSE "+value);
  }

  create(): void {

    this.data = {
      _id: "",
      achse : '',
      schadstoffklasse :'',
      dieselverbrauch:'',
      gewichtsklasse: '',
      start: '',
      ziel: '',
      streckenlaenge:''

    }
    const values = this.form.value;

    this.data.achse =  this.achse_v;
    this.data.dieselverbrauch = values.dieselControl;
    this.data.schadstoffklasse = this.schadstoff_v;
    this.data.gewichtsklasse = this.klasse_v;
    this.data.start = this.rps.start;
    console.log('create:' +this.rps.start)
    this.data.ziel = this.rps.ziel;
    this.data.streckenlaenge = this.rps.streckenlaenge;


    this.bs.create(this.data)


  }
}
