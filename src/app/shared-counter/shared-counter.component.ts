import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-shared-counter',
    templateUrl: './shared-counter.component.html',
    styleUrls: ['./shared-counter.component.scss']
})
export class SharedCounterComponent implements OnInit {
    count$: Observable<number>;

    test = 0;

    constructor(
        private counterService: CounterService
    ) { }

    ngOnInit(): void {
        this.count$ = this.counterService.count$;
    }

    incrementCount() {
        this.counterService.increment();
        this.test += 10;
    }
}
