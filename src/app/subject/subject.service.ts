/**
 * subject service
 * location : src/app/subject/subject.service.ts
 */
import { Injectable, Inject } from '@angular/core';
import { OPAQUE_TOKEN } from '../app.config';

@Injectable()
export class SubjectService {

  constructor(
    @Inject(OPAQUE_TOKEN) public appConfig: any,
  ) {}

  /**
   * function return apiEndpoint
   * @params none
   * return Promise<string>
   */
  getApiEndpoint(): Promise<string> {
    return Promise.resolve(this.appConfig.apiEndpoint);
  }
}