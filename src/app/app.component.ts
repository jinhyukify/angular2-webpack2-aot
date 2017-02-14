/**
 * app root component
 * location : src/app/app.component.ts
 */
import { Component } from '@angular/core';
import '!style-loader!css-loader!sass-loader!../../public/scss/styles.scss';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent { }