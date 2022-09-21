import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Data } from '../shared/data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
  datas!: Data[];
  deleted = false;


  constructor(private bs: BackendService,
              private router: Router) { }

  ngOnInit(): void {
    this.readAll();
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
  delete(id: string): void {
    this.bs.deleteOne(id).subscribe(
      (
        response: any) => {
        console.log('response : ', response);
        if(response.status == 204){
          console.log(response.status);
          this.reload(true);
        } else {
          console.log(response.status);
          console.log(response.error);
          this.reload(false);
        }
      },
      error => console.log(error)
    );
  }

  reload(deleted: boolean)
  {
    this.deleted = deleted;
    this.readAll();
    this.router.navigateByUrl('/');
  }
}
