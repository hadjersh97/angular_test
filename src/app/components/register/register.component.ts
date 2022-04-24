import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  registerform: any;
 
  constructor(private fb: FormBuilder){
      this.registerform = fb.group({
        "username": ['', Validators.required, Validators.minLength(6),
        Validators.maxLength(20)],
        "email": ['', Validators.required],
        "password": ['', Validators.required],
        "role": ['',Validators.required]
      })
  }

  changeRole(e:any){
    console.log(e.target.value);
    this.registerform.get('role').setValue(e.target.value, {
      onlySelf: true,
    });
  }

  registerSubmit(){
    console.log(this.registerform.value);
  }
  
  ngOnInit(): void {
  }

}
