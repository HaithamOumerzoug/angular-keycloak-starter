import { TestBed } from '@angular/core/testing';

import { KeycloakHttpInterceptor } from './keycloak-http.interceptor';

describe('KeycloakInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      KeycloakHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: KeycloakHttpInterceptor = TestBed.inject(KeycloakHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
