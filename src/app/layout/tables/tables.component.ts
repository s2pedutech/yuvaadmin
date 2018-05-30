import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TabsComponent } from '../bs-component/components';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})

export class TablesComponent {
data : Array<any>;
tableData = [];
usertitle = [
{"name":"#"},
{"name" :"fname"},
{"name": "lname"},
{"name": "uname"}
];

tabss = [{"sno":"1", "fname":"Gandhar","lname":"Patwardhan","uname":"gp"},{"sno":"1", "fname":"Gandhar1","lname":"Patwardhan1","uname":"gp1"}];

tabss1 = [{"sno":"2", "fname":"Faisal","lname":"Amdani","uname":"fa","no":"20"}];
    constructor() {
    
    //this.Users();
    }

/*

 Users(){
  
 this.data = this.tabss;
 this.tableData = [];
 for(var i=0; i < this.tabss.length; i++)
 {
    var d = {};
    d.col1 = this.tabss[i].sno;
    d.col2 = this.tabss[i].fname;
    d.col3 = this.tabss[i].lname;
    d.col4 = this.tabss[i].uname;
    this.tableData.push(d);
 }
  }
   
   Events(){
   
   this.tableData = [];
     for(var i=0; i < this.tabss1.length; i++)
     {
        var d = {};
        d.col1 = this.tabss1[i].sno;
        d.col2 = this.tabss1[i].fname;
        d.col3 = this.tabss1[i].lname;
        d.col4 = this.tabss1[i].uname;
        this.tableData.push(d);
     }
   }
   
   Internship()
   {
         this.tableData = [];
         for(var i=0; i < this.tabss.length; i++)
         {
            var d = {};
            d.col1 = this.tabss[i].sno;
            d.col2 = this.tabss[i].fname;
            d.col3 = this.tabss[i].lname;
            d.col4 = this.tabss[i].uname;
            this.tableData.push(d);
         }
   }
   
   Workshop()
   {
         this.tableData = [];
         for(var i=0; i < this.tabss.length; i++)
         {
            var d = {};
            d.col1 = this.tabss[i].sno;
            d.col2 = this.tabss[i].fname;
            d.col3 = this.tabss[i].lname;
            d.col4 = this.tabss[i].uname;
            this.tableData.push(d);
         }
   }
*/ 
}
