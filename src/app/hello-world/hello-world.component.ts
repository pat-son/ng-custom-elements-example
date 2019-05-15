import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl: './hello-world.component.html'
})
export class HelloWorldComponent {
    @Input()
    name = 'World';
}
