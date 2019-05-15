import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {
    private count = 0;

    private _count$ = new BehaviorSubject(0);

    get count$() {
        return this._count$;
    }

    increment() {
        this.count += 1;
        this._count$.next(this.count);
    }
}
