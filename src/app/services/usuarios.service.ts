import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseUser } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }


  obtenerUsuario(): Observable<any> {


    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Guillermo');

    // const headers = new HttpHeaders({
    //   'x-token-x': 'SDFKLJHSDIOL9FDS.SDFOIJSDJF.SDFJIOSDFO'
    // });

    return this.http.get<ResponseUser>(`https://reqres.in/api/user/asd`, {
      params,
      // headers
    }).pipe(

      map( ({data}) => data )
    );

  }


}
