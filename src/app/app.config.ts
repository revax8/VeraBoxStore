import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ClashService } from './Services/clash.service';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()/*provideZoneChangeDetection({ eventCoalescing: true })*/, provideExperimentalZonelessChangeDetection(), provideRouter(routes)/*, provideClientHydration()*/]
};
