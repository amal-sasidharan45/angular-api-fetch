import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url="https://jsonplaceholder.typicode.com/posts"
  getdetails(){
    return this.http.get(this.url)
  }
}
