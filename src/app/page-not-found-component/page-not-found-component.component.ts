import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css']
})
export class PageNotFoundComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
     e:string ="this ";
      f :number  =50;
      d: Array<number> = [null, undefined, 10, 15] ;

      sentence :string =` ${this.e} ${this.f} ${this.d[2]}` ;
e="ed";
      
      
}
