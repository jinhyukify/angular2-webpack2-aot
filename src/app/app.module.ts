import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { CommonModule }         from '@angular/common';
import { HttpModule }           from '@angular/http';

// Import Component
import { AppComponent }         from './app.component';
import { MainComponent }        from './main/main.component';

// Import Service
import { APP_CONFIG, OPAQUE_TOKEN } from './app.config';

// Import Module
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    AppRoutingModule
    // ....
  ],
  declarations: [
    AppComponent,
    MainComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    {provide: OPAQUE_TOKEN, useValue: APP_CONFIG} // provide for global variables
  ]
})
export class AppModule { }