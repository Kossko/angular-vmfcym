import { Injectable } from '@angular/core';
import { Subject, of, timer  } from 'rxjs'
import { delayWhen, take } from 'rxjs/operators';

@Injectable()
export class ApiService{
  private $numbers = of([1,2,3,4,5,6,7,8,9]);

  constructor(){

  }

  numbers(): Subject<number>{
    const delayRandomSeconds = () => timer(Math.floor(Math.random() * 800)+ 200);
    return this.$numbers.pipe(delayWhen(delayRandomSeconds));
  }

}