import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    slider
  ]
})
export class AppComponent implements OnInit {
  title: string = 'Or\'s Angular Starter';

  constructor(
  ) {}

  ngOnInit() {}

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
