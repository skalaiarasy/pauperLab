import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostapiService {
  apiUrl:string = "https://www.reddit.com/r/aww/.json";
  constructor(private http:HttpClient) { }

  //method
  getPauper():any{
    return this.http.get(this.apiUrl);
  }
  

}


