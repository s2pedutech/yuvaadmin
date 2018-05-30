import { routerTransition } from '../../router.animations';
import { AngularFireDatabase } from 'angularfire2/database'

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss'],
    animations: [routerTransition()]

})
export class WorkshopsComponent implements OnInit {

usertitle = [

{"name" :"Name"},
{"name": "Venue"},
{"name": "Date"},
{"name": "Timing"},
{"name": "Address"}
];

WorkShopData = [];
  constructor() {
  this.WorkShopData = [];
  firebase.database().ref('workshops/').on('value',resp => {
    
     
    this.WorkShopData = [];
    this.WorkShopData = snapshotToArray(resp);
    console.log(resp);
    console.log(this.WorkShopData);
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
