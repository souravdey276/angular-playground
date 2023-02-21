import { from, Observable, Subscriber, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { map,filter, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
observable = new Observable<number>(subscriber=>{
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  subscriber.next(4)
  subscriber.next(5)
  subscriber.next(6)
  subscriber.next(7)
  subscriber.next(8)
  subscriber.next(9)
  subscriber.complete()
}).pipe(
  filter((data)=> data >2),
  map((data) =>data * 3)
)

myData = from([1,2,3,4,'A','B','C']);
otherObservable = this.myData
.pipe(
  map((value)=>{
    let result = (value as number) * 2;
    if(Number.isNaN(result)){
      console.log("Error in Stream");
      throw new Error('NaN Error');
    }
    return result;
  }),
  catchError(error=>{
    console.log("Error Management Happening")
    return throwError(error);
  }
    )
)
  constructor() { }

  getObservable(){
    return this.observable;
  }

   getOtherObservable(){
    return this.otherObservable;
  }
}
