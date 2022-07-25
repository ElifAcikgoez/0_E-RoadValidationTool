import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../shared/backend.service';
import { Data } from '../../shared/data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // @ts-ignore
  id: string = '';
  datas!: Data;
  form: FormGroup;


  constructor(private route: ActivatedRoute,
              private bs: BackendService,
              private fb: FormBuilder,
              private location: Location,
              private router: Router
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

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);
  }
  readOne(id: string): void {
    this.bs.getOne(id).subscribe(
      (
        response: Data) => {
        this.datas = response;
        console.log(this.datas);
        this.form.patchValue({
          achseControl: this.datas?.achse,
          schadstoffControl: this.datas?.schadstoffklasse,
          gewichtControl: this.datas?.gewichtsklasse,
          dieselControl: this.datas?.dieselverbrauch,
        });
        return this.datas;
      },
      error => console.log(error)
    );
  }
  cancel(): void {
    this.location.back();
  }
  update(): void {
    const values = this.form.value;
    this.datas.achse = values.achseControl;
    this.datas.dieselverbrauch = values.dieselControl;
    this.datas.schadstoffklasse = values.schadstoffControl;
    this.datas.gewichtsklasse = values.gewichtControl;

    this.bs.update(this.id, this.datas)
      .subscribe(
        response => {
          console.log("DATAS" + this.datas);
          console.log(response);
          console.log(response._id)
          ;
        },
        error => {
          console.log(error);
        }
      );

  }
}
