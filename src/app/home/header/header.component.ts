import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Cartcount : number = 5;
name : string = 'Karthik';
// Product_class :string = 'V_P ed';
check(event:any){
  console.log(event);
  console.log(event.target.className);
  var tempclass = event.target.className;
  // if(tempclass === this.Product_class){

  }
}

