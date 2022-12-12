import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsapiService {

  constructor(private http: HttpClient) { }

  obtenerPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  obtenerUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  obtenerPost(id: number){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  
  obtenerComentarioPost(id: number){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
  }
}
