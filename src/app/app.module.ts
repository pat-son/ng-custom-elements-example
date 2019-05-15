import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { createCustomElement } from '@angular/elements';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { CounterService } from './shared-counter/counter.service';
import { SharedCounterComponent } from './shared-counter/shared-counter.component';
import { CustomTabsComponent } from './custom-tabs/custom-tabs.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        HelloWorldComponent,
        SimpleCardComponent,
        SharedCounterComponent,
        CustomTabsComponent
    ],
    entryComponents: [
        HelloWorldComponent,
        SimpleCardComponent,
        SharedCounterComponent,
        CustomTabsComponent
    ],
    providers: [
        CounterService,
    ],
})
export class AppModule {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        const elements = [
            {
                tag: 'hello-world', component: HelloWorldComponent
            },
            {
                tag: 'simple-card', component: SimpleCardComponent
            },
            {
                tag: 'shared-counter', component: SharedCounterComponent
            },
            {
                tag: 'custom-tabs', component: CustomTabsComponent
            }
        ];

        for (const element of elements) {
            const customElement = createCustomElement(element.component, { injector: this.injector});
            customElements.define(element.tag, customElement);
        }
    }
}
