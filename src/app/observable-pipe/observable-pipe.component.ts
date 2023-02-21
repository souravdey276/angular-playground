import { Subscriber } from 'rxjs';
import { ObservableService } from './observable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-pipe',
  templateUrl: './observable-pipe.component.html',
  styleUrls: ['./observable-pipe.component.css']
})
export class ObservablePipeComponent implements OnInit {
data:any=[]
  constructor(private service: ObservableService) { }

  ngOnInit(): void {
    this.service.getObservable()
    .subscribe((data)=>{
      this.data=data
      console.log('Response from Observable')
    })

    this.service.getOtherObservable()
    .subscribe(
      (data)=>{
        console.log('Value Received')
      }
    )
  }

}
