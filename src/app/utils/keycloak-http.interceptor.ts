import { KeycloakService } from 'keycloak-angular';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KeycloakHttpInterceptor implements HttpInterceptor {

  constructor(
    private keycloak: KeycloakService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const excludedPaths = ['users/signIn','users/signUp'];
		const urlFoundInExcluded = excludedPaths.filter(path => request.url.indexOf(path) !== -1);
    this.keycloak.getToken().then(token=>{
      if(token!=null){
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }).catch(err=>console.log(err))
    
    return next.handle(request);
  }
}
