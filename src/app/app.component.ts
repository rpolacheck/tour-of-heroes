import { Component } from '@angular/core';
import { ZPercent } from 'app/functions/z-percent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  GetZPercent: number = ZPercent.GetZPercent(1.5);
}
