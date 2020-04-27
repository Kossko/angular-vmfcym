import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { of, throwError, Observable, Subscription } from 'rxjs';
import { fromEvent, concat } from 'rxjs';
import { tap, map, switchMap, skipUntil, mapTo } from 'rxjs/operators';

import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  @ViewChild('refreshRef') refreshRef: ElementRef;
  hotObservable$: Observable<EventSource>;
  $subscribed: Subscription;
  pending = false;
  constructor(private ApiService: ApiService){
    
  }

  ngAfterViewInit() {
    this.hotObservable$= fromEvent(this.refreshRef.nativeElement, 'click');
    this.hotObservable$
    .pipe(mapTo(this.ApiService.numbers()))
    .subscribe((sub: Observable<number[]>) => {
      if(!this.$subscribed || this.$subscribed.closed){
       this.$subscribed = sub.subscribe(result =>{
            console.log(result);
        });
      }
    });
  }
}
