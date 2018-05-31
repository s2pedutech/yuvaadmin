import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import * as firebase from 'firebase';


@Component({
  selector: 'app-eventsform',
  templateUrl: './eventsform.component.html',
  styleUrls: ['./eventsform.component.scss'],
    animations: [routerTransition()]
})
export class EventsformComponent implements OnInit {
data : any;


name: string = " ";
date: string =" ";
joblocation: string = " ";
key: string = " ";
event : any;
userRef : any;
userRef1 : any;
registerForm: FormGroup;
    submitted = false;
 
  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private router: Router) { 
  
  
   this.route.queryParams.subscribe(params => {
        this.data = params;
            console.log(this.data);
           var s = "events/" + this.data.key;
           
            this.userRef = firebase.database().ref(s);
        });
       console.log(this.userRef.key);
 
    var s1 = "events/";
    this.userRef1 = firebase.database().ref(s1);
  
  }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            date: ['', Validators.required],
            joblocation: ['', [Validators.required]],
            
            
        });
    }
 
    // convenience getter for easy access to form fields
    //get f() { return this.registerForm.controls; }
 
    onSubmit() {
        
        var u: any = {};
     if(this.registerForm.controls['name'].value != null)
        u.name = this.registerForm.controls['name'].value;
    if(this.registerForm.controls['date'].value != null)
        u.date = this.registerForm.controls['date'].value;
    if(this.registerForm.controls['joblocation'].value != null)
        u.joblocation = this.registerForm.controls['joblocation'].value;
        
    
    
   // console.log(this.data.toString());
    
    if(!this.data.key)
    {
    
    console.log("add called");
    
    var x = this.userRef1.push(u);
      var y = "events/" + x.key;
      firebase.database().ref(y).update({key: x.key});
      
    console.log(x.key);
 
    
    }
    else{
    console.log("edit called");
        this.userRef.update(u);

    
    }
    //this.router.navigate(['/events']);
 
        
    }
    }
