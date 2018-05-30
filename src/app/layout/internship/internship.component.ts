import { routerTransition } from '../../router.animations';

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss'],
  animations: [routerTransition()]
})
export class InternshipComponent implements OnInit {

usertitle = [

{"name" :"Name"},
{"name": "Venue"},
{"name": "Address"}
];

data = [{"sno":"1", "fname":"Gandhar","lname":"Patwardhan","uname":"gp"},{"sno":"1", "fname":"Gandhar1","lname":"Patwardhan1","uname":"gp1"}];

InternshipData = [];
  constructor() {
  this.InternshipData = [];
  firebase.database().ref('internships/').on('value',resp => {
    
     
    this.InternshipData = [];
    this.InternshipData = snapshotToArray(resp);
    console.log(resp);
    console.log(this.InternshipData);
    }); 
  }
  
  

  ngOnInit() {
  }

}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    
    snapshot.forEach(childSnapshot => {
    
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        console.log(item.key);
        returnArr.push(item);
    });

    return returnArr;
   
};
