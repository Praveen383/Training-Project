import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from './products-service.service';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'E-mart';
  assetsData: any;
  expectedData = [];
  uniqueProjects = [];
  projectData = [];
  shortened_name;
  user;
  projectDat: any;
  constructor(private service:ProductsServiceService) { }

  ngOnInit(){
    this.service.getMessage().subscribe((res) => {
      this.assetsData = res;
    });
  }
  getData(){
    this.uniqueProjects = [...new Set(this.assetsData.map(m => m.project_name))];
    this.uniqueProjects.forEach((a) => {
    this.projectData = this.assetsData.filter((t) => (t.project_name === a) ? t.project_metrics : 0 ).
                        map((res,i) => res.project_metrics[i].user);
    this.projectDat = this.assetsData.filter((t) => (t.project_name === a) ? t.project_metrics : 0 ).
                        map((res,i) => res.project_metrics[i].shortened_name);                   
    // this.user = this.projectData.map((r,i) => r[i].user);
      this.shortened_name = this.projectData.map((r,i) => r[i].shortened_name);

      this.expectedData.push({ label: this.projectDat,  user: this.projectData  });

    });
    console.log(this.expectedData);

    // console.log("mmm",this.Resource);
    // this.uniqueResource.forEach((l:any) => {
    //   let i = {};
    //   i[l] = this.Resource;
    //   this.taskLength.push(i);  
    // });

    // console.log("mmm",this.shortened_name);

    

  }
}
