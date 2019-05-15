import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    selector: 'custom-tabs',
    templateUrl: './custom-tabs.component.html',
    styleUrls: ['./custom-tabs.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomTabsComponent implements OnInit {
    @ViewChild('tabsSlot') tabsSlot: any;
    @ViewChild('contentSlot') contentSlot: any;

    tabs: any[];
    contents: any[];

    ngOnInit(): void { }

    tabsChange() {
        this.tabs = this.tabsSlot.nativeElement.assignedNodes();
        this.contents = this.contentSlot.nativeElement.assignedNodes();

        console.log(this.tabs);
        console.log(this.contents);

        if (this.tabs.length === 0 || this.contents.length === 0) {
            return;
        }

        for (let i = 0; i < this.tabs.length ; i += 1) {
            this.tabs[i].addEventListener('click', () => {
                this.selectTab(i);
            });
        }

        this.selectTab(0);

    }

    selectTab(index: number) {
        for (let i = 0; i < this.tabs.length ; i += 1) {
            this.tabs[i].setAttribute('aria-selected', index === i);
            this.contents[i].setAttribute('aria-hidden', index !== i);
        }
    }
}
