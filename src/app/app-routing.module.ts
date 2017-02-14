/**
 * ng route for root route
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MainComponent } from './main/main.component';

// You can import routes with lazy loading
@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: MainComponent },
    { path: 'subject', loadChildren:'./subject/subject.module#SubjectModule' } // for lazy loading
  ])], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
