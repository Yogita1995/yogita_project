import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('boxcolor')  boxcolor:ElementRef;

  categories=[];
  data=[];
  alldata:any;
  show:boolean=false;
  
  constructor(private service :MyserviceService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.categories=[];
    this.service.listing().subscribe((x:any)=>{
      this.alldata=x;
      this.categories=x.Categories;
      console.log(x)
      this.onItems(this.categories[0].Category_name)
      // this.data =this.categories[0];
    })
    // console.log(this.data);
  }
  onItems(val){
    this.show=true;
    // this.boxcolor.nativeElement.style.background="red";
    this.data =this.categories.filter(key=> key.Category_name === val);
    console.log(this.data);

  }
}
