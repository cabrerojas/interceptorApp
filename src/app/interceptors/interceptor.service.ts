import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     const headers = new HttpHeaders({
       'x-token-x': 'SDFKLJHSDIOL9FDS.SDFOIJSDJF.SDFJIOSDFO'
     });

     const reqClone = req.clone({
       headers,
      });


     return next.handle( reqClone ).pipe(
       catchError( this.manejarError )
     );

  }

  manejarError( error: HttpErrorResponse ): Observable<never> {
    console.log('Sucedió un error');
    console.warn(error);

    return throwError(error);
  }

}
