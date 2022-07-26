import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../shared/backend.service';
import { Data } from '../../shared/data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private bs: BackendService,
              private fb: FormBuilder,
              private router: Router,
             ) {


    this.form = this.fb.group(
      {
        achseControl: ['', Validators.required],
        dieselControl: ['', Validators.required],
        schadstoffControl: ['', Validators.required],
        gewichtControl: ['', Validators.required],
      }
    );

  }
  data! : Data;

  ngOnInit(): void {

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
