import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ParentModel } from '../modal/parent';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(
    private http: HttpClient


  ) { }
  signupParent(data:ParentModel){
    return this.http.post<ParentModel>('http://localhost:3000/parent',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  loginParent(data:ParentModel){
    return this.http.post<ParentModel>('http://localhost:3000/parent',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


}
