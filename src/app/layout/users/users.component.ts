import { routerTransition } from '../../router.animations';

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
//import { RouterModule, Routes } from '@angular/router';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { MyUser } from '../myuser';
@Component({
  selector: 'app-users' ,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [routerTransition()]
})
export class UsersComponent implements OnInit {
 displayedColumns = ['position', 'Name', 'mobile', 'email'];
public myusers :MyUser[] = [];


usertitle = [

{"name" :"Name"},
{"name": "Mobile No."},
{"name": "Email Id"},
{"name": "Semester"},
{"name": "Stream"},
{"name": "Branch"}
];

UserData = [];

data = [{"sno":"1", "fname":"Gandhar","lname":"Patwardhan","uname":"gp"},{"sno":"1", "fname":"Gandhar1","lname":"Patwardhan1","uname":"gp1"}];
  constructor(private router: Router) { 

//console.log(this.myusers[0].firstName);

  this.UserData = [];
  firebase.database().ref('users/').on('value',resp => {
    
     
    this.UserData = [];
    this.UserData = snapshotToArray(resp);
    console.log(resp);
    console.log(this.UserData);
    for(var ind = 0; ind < this.UserData.length; ind++)
    {
        var x = this.UserData[ind];
        var m = new MyUser();
        if(x.firstName != '' || x.firstName != null)
        {
            m.firstName = x.firstName;
        }
        //console.log(x.lastName);
        if(x.lastName != '' || x.lastName != null || typeof x.lastName != undefined)
        {
        
            m.lastName = x.lastName;
            if(m.lastName == 'undefined')
                m.lastName = ' ';
        }
        if(x.mobno != '' || x.mobno != null)
        {
            m.mobno = x.mobno ;
        }
        if(x.email != '' || x.email != null)
        {
            m.email = x.email ;
        }
        //console.log(x.college);
        var c = x.college;
        if(c)
        {
            m.college = c.name ;
        }
        if(x.city != '' || x.city != null)
        {
            m.city = x.city ;
        }
        if(x.branch != '' || x.branch != null)
        {
            m.branch = x.branch ;
        }
        if(x.key != '' || x.key != null)
        {
            m.key = x.key ;
        }
        if(x.mobile != '' || x.mobile != null)
        {
            m.mobile = x.mobile ;
        }
        if(x.password != '' || x.password != null)
        {
            m.password = x.password ;
        }
        if(x.semester != '' || x.stream != null)
        {
            m.semester = x.semester ;
        }
        if(x.stream != '' || x.stream != null)
        {
            m.stream = x.stream ;
        }
        if(x.yop != '' || x.yop != null)
        {
            m.yop = x.yop ;
        }
        if(x.banking != '' || x.banking != null)
        {
            m.banking = x.banking ;
        }
        if(x.it != '' || x.it != null)
        {
            m.it = x.it ;
        }
        if(x.bpo != '' || x.bpo != null)
        {
            m.bpo = x.bpo ;
        }
        
        if(x.kpo != '' || x.kpo != null)
        {
            m.kpo = x.kpo ;
        }
        if(x.crt != '' || x.crt != null)
        {
            m.crt = x.crt ;
        }
        if(x.govt != '' || x.govt != null)
        {
            m.govt = x.govt ;
        }
        if(x.internship != '' || x.internship != null)
        {
            m.internship = x.internship ;
        }
        if(x.isProfileComplete != '' || x.isProfileComplete != null)
        {
            m.isProfileComplete = x.isProfileComplete ;
        }
        if(x.lastSeenDate != '' || x.lastSeenDate != null)
        {
            m.lastSeenDate = x.lastSeenDate ;
        }
        this.myusers.push(m);
    }
        
    
    }); 
  }

onAdd(){
        this.router.navigateByUrl('/userform');
}

onEdit(item){

 this.router.navigate(['/userform'],{ queryParams: item });
}
  ngOnInit() {
  }
  btnClick()
  {
  
  var head = ['Firstname', 'Lastname', 'Email','Mobile','Alternate Mob No.','City','Branch','Password','Semester','Last Seen','Key','College','YOP','Stream',''];
   var options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: false,
    useBom: true,
    headers: (head)
  };
  
 
    new Angular2Csv(this.myusers, 'report',options);
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