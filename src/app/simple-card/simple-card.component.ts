import { Component, Input } from '@angular/core';

@Component({
    selector: 'simple-card',
    templateUrl: './simple-card.component.html',
    styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent {
    @Input()
    title = '';
}
