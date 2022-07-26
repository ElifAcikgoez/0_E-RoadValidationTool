import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../shared/backend.service';
import { Data } from '../../shared/data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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

  klassen_array: any[] = ['< 7,5t (nicht mautpflichtig)','7,5t - 11,99t','12t - 18t','>18t']
  achsen_array: any[] = ['1','2','3','4','5','> 5']
  schadstoff_array: any[]= ['Euro 0', 'Euro 1', 'Euro 2','Euro 3','Euro 4','Euro 5','Euro 6']

  constructor(private route: ActivatedRoute,
              private bs: BackendService,
              private fb: FormBuilder,
              private router: Router,
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

  create(): void {

    this.data = {
      _id: "",
      achse : '',
      schadstoffklasse :'',
      dieselverbrauch:'',
      gewichtsklasse: ''

    }
    const values = this.form.value;
    this.data.achse =  values.achseControl;
    this.data.dieselverbrauch = values.dieselControl;
    this.data.schadstoffklasse = values.schadstoffControl;
    this.data.gewichtsklasse = values.gewichtControl;



    this.bs.create(this.data)


  }
}
