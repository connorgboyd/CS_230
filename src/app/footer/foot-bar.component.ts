import { Component, Input } from '@angular/core';

@Component ({
selector: 'app-foot-bar',
templateUrl: './foot-bar.component.html',
styleUrls: [ './foot-bar.component.css' ]
})
export class FootBarComponent { 
    @Input()
    title: string= "defaultTitle";
    @Input()
    symbol: string="defaultSymbol";
    @Input()
    date: string="defaultDate";
}