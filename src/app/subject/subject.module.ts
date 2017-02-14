import { NgModule } from '@angular/core';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent }   from './subject.component';
import { SubjectService } from './subject.service';

@NgModule({
  imports: [
    SubjectRoutingModule
  ],
  exports: [],
  declarations: [SubjectComponent],
  providers: [SubjectService],
})
export class SubjectModule { }
