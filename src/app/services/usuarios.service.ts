import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }


  obtenerUsuario(): Observable<Object> {


    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Guillermo');

    const headers = new HttpHeaders({
      'x-token-x': 'SDFKLJHSDIOL9FDS.SDFOIJSDJF.SDFJIOSDFO'
    });

    return this.http.get(`https://reqres.in/api/user`, {
      params,
      headers
    });

  }

}
