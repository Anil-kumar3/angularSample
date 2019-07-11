import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent  {

  profileForm = new FormGroup({
    firstName : new FormControl(""),
    lastName : new FormControl("")
  }
  );
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    console.warn(this.profileForm.value);
  }
}
