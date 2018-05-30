import { routerTransition } from '../../router.animations';
import * as firebase from 'firebase';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  animations: [routerTransition()]
})
export class EventsComponent implements OnInit {

action : string = "add";

usertitle = [
{"name":"Name"},
{"name" :"Date"},
{"name" :"Job Locaion"},
{"name": "Venue"}
];

data = [{"sno":"1", "fname":"Faisal","lname":"Amdani","uname":"fa"},{"sno":"1", "fname":"Faisal1","lname":"Amdani1","uname":"fa1"}];

itemData = [];
EventData = [];
  constructor(private router: Router) {
  this.EventData = [];
  firebase.database().ref('events/').on('value',resp => {
    
     
    this.EventData = [];
    this.EventData = snapshotToArray(resp);
    console.log(resp);
    console.log(this.EventData );
    }); 
  }
  
  View1(item){
  
  console.log(item);
                //var applicants = snapshotToArray(item.applicants);
                    console.log(item.applicants);
  var s = "events/" + item.uid + "/applicants";
  var ref1 = firebase.database().ref(s);
  ref1.on('value',resp => {
  
  this.itemData = getValues(resp);
  console.log(this.itemData);
  });
  var mypath : any = {};
  mypath.path = s;
          this.router.navigate(['/eventsapplicants'],{ queryParams: mypath });
         //console.log(item);

  }
  Add(){
  console.log(this.action);
  this.router.navigate(['/eventsform'],{queryParams: this.action});
  
  }
  
  Edit(item){

 this.router.navigate(['/eventsform'],{ queryParams: item });
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

export const getValues = snapshot => {
    let returnArr = [];

    
    snapshot.forEach(childSnapshot => {
    
        let item = childSnapshot.val();
        //item.key = childSnapshot.key;
        //console.log(item.key);
        returnArr.push(item);
    });

    return returnArr;
};
