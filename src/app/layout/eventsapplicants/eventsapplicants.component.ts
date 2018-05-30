import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-eventsapplicants',
  templateUrl: './eventsapplicants.component.html',
  styleUrls: ['./eventsapplicants.component.scss'],
    animations: [routerTransition()]

})
export class EventsapplicantsComponent implements OnInit {

  
  ngOnInit() {
  }
  data : any;
  
  UserData = [];
  applicants = [];
  filteredItems = [];
  constructor(private route: ActivatedRoute) {
  
  this.UserData = [];
  firebase.database().ref('users/').on('value',resp => {
    
     
    this.UserData = [];
    this.UserData = snapshotToArray(resp);
    console.log(resp);
    console.log(this.UserData);
   
    this.route.queryParams.subscribe(params => {
        this.data = params;
        console.log(params);
        var ref1 = firebase.database().ref(params.path);
        ref1.on('value', re => {
            this.applicants = [];
            this.applicants = getValues(re);
            console.log(this.applicants);
            
            this.filteredItems = this.UserData.filter(item => {
            //console.log(item.key);
                return this.applicants.find(k => k.uid === item.key);
            })
            
            console.log(this.filteredItems);
        });
        });
    
    }); 
  
  
  
        
  
  }

}
export const snapshotToArray = snapshot => {
    let returnArr = [];

    
    snapshot.forEach(childSnapshot => {
    
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        //console.log(item.key);
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
