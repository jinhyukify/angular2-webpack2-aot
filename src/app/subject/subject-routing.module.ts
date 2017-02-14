/**
 * subject routing module
 * location : src/app/subject/subject-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectComponent } from './subject.component';

const subjectRoutes: Routes = [
  {
    path: '',
    component: SubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(subjectRoutes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
