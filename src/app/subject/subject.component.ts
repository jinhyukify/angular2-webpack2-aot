import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';
@Component({
  selector: 'subject',
  templateUrl: 'subject.component.html'
})
export class SubjectComponent implements OnInit {
  subjectApiEndpoint: string;
  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    this.subjectService.getApiEndpoint()
      .then(apiEndpoint => this.subjectApiEndpoint = apiEndpoint);
  }
}