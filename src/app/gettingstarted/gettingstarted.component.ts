import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Data } from '../shared/data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { ActivatedRoute } from '@angular/router';


/*interface Food {
  value: string;
  viewValue: string;
}*/
interface Klasse {
  value: string;
  viewValue1: string;
}
interface Schadstoffklasse {
  value: string;
  viewValue: string;
}
interface Achse {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-gettingstarted',
  templateUrl: './gettingstarted.component.html',
  styleUrls: ['./gettingstarted.component.css']
})

export class GettingstartedComponent implements OnInit {
  datas: Data[];
  data: Data;
  selectedId: number;
  form: FormGroup;
  id: string = '';
  constructor(
    private route: ActivatedRoute,
    private bs: BackendService,
    private fb: FormBuilder,
    private ds: DataService
  ) {
    this.form = this.fb.group(
      {
        verbrauchControl: ['', Validators.required],
        achseControl: ['', Validators.required],
        schadstoffControl: ['', Validators.required],
        gewichtsControl: ['', Validators.required],
        dieselverbrauchControl : ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readAll();
    }

  }


  readAll(): void {
    this.bs.getAll().subscribe(
      (
        response: Data[]) => {
        this.datas = response;
        console.log(this.datas);
        return this.datas;
      },
      error => console.log(error)
    );
  }

  post(): void{
    this.ds.create(this.form)
  }
  klassen: Klasse[] = [
    {value: 'klasse-0', viewValue1: '< 7,5t (nicht mautpflichtig)'},
    {value: 'klasse-1', viewValue1: '7,5t - 11,99t'},
    {value: 'klasse-2', viewValue1: '12t - 18t'},
    {value: 'klasse-3', viewValue1: '>18t'},
  ];
  achsen: Achse[] = [
    {value: '0', viewValue: '2'},
    {value: '1', viewValue: '3'},
    {value: '2', viewValue: '4'},
    {value: '3', viewValue: '5'},
    {value: '4', viewValue: '> 5'},



  ];
  sklassen: Schadstoffklasse[] = [
    {value: 'E0', viewValue: 'Euro 0'},
    {value: 'E1', viewValue: 'Euro 1'},
    {value: 'E2', viewValue: 'Euro 2'},
    {value: 'E3', viewValue: 'Euro 3'},
    {value: 'E4', viewValue: 'Euro 4'},
    {value: 'E5', viewValue: 'Euro 5'},
    {value: 'E6', viewValue: 'Euro 6'},
  ];
  /*foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];*/
}
