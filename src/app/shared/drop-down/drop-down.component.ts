import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  dropdownOpened = false
  constructor() { }


  ngOnInit(): void {
    // const myObservable = new Observable((observer)=>{
    //   console.log("observer started");
    //   const x =5;
    //   const y =6;
    //   if(y+x == 10){
    //     console.log('observer has been resolved');
    //     observer.next('success');
    //   }else{
    //     console.log('observer has been rejected');
    //     observer.error('Error has happpened')
    //   }
    //   observer.complete();
    // });

    // const subscription =myObservable.subscribe(
    //   (res)=>{
    //     console.log(res)
    //   },
    //   (err)=>{
    //     console.log(err)
    //   },
    //   ()=>{
    //     console.log('compelete')
    //   }
    // )
  }

}
