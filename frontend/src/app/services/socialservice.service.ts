import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SocialService {
  authToken: any;
  user: any;
  constructor(private http: Http) { }

  fbLogin(){
    let headers =new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8080/auth/facebook',this.user,{headers: headers})
    .map(res =>res.json());
  }
}
