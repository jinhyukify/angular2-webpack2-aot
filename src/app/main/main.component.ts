import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  template: `
    <h2>
      main page
    </h2>
    <p>
       <a [routerLink]="['/subject']" routerLinkActive="is-active">go subject</a>
    </p>
  `
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}