import { Injectable, inject } from '@angular/core';

@Injectable(
{providedIn : `root`}
)
export class MyService {
    student: any[] =[
        {id:1,name:'srikanth',age:22,isActive:true},
        {id:2,name:'rahul',age:25,isActive:false},
        {id:3,name:'srija',age:24,isActive:true},
        {id:4,name:'parth',age:27,isActive:true},
    ]

    fetchData(){
        console.log('Data fetched Successfully')
    }
}
