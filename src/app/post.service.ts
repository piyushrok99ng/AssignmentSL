import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private uri="https://my-json-server.typicode.com/piyushrok99ng/mock/";

  getPosts(){
    return this.http.get(this.uri+'posts');
  }

  getPostDetail(id){
    return this.http.get(this.uri+'postDetail/'+id);
  }

  getUserDetail(id){
    return this.http.get(this.uri+'users/'+id);
  }

}
