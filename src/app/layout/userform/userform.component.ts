import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
    animations: [routerTransition()]

})
export class UserformComponent implements OnInit {
data : any;


firstName: string = " ";
lastName: string =" ";
email: string = " ";
password: string =" ";


registerForm: FormGroup;
    submitted = false;
 
  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder) { 
  
   this.route.queryParams.subscribe(params => {
        this.data = params;
            console.log(params);
            //this.isAddPage = (params === undefined || params === null || Object.keys(params).length === 0);
            
        });
        
  
  }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
 
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
 
    onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
 
        }
}
