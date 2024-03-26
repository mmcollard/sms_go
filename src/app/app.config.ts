import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations';
import { HashLocationStrategy } from '@angular/common';

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()), 
    provideAnimations(), 
    HashLocationStrategy, 
    
    importProvidersFrom(HttpClientModule),
    provideHttpClient(
      // withInterceptors([tokenInterceptor])
    ),
  ]
};
