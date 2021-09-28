import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public footerTitle: string = "MetaNin";
  public footerSymbol: string = "©";
  public footerDate: string = "2021";
  name = 'Angular ' + VERSION.major;
 } 


