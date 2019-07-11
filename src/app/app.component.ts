import { Component } from '@angular/core';
import { EmpList} from './emp-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  exmpList : EmpList= {
    name:'Anil'
  };
  title=this.exmpList.name;

  //console.log(title);
}
