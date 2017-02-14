/**
 * set global variables
 * location: src/app/app.config.ts
 * 
 * you can use in service or components.. anywher with provider
 */

import { Inject, OpaqueToken } from '@angular/core';

export let OPAQUE_TOKEN = new OpaqueToken('app.config');

// set interface for APP_CONFIG
export interface AppConfig {
  apiEndpoint: String;
  // another key: number;
};

// set global variables
export const APP_CONFIG: AppConfig = {
  apiEndpoint: 'https://your.domain.com'
  // another key: 12345
};

export let OpaqueTokenProvider = {
  provider: OPAQUE_TOKEN,
  useValue: APP_CONFIG
};