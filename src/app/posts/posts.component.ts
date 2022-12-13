import { Component, OnInit } from '@angular/core';
import { PostsapiService } from '../postsapi.service';

import { Publicaciones } from '../Modelos/publicaciones';
import { Usuarios } from '../Modelos/usuarios';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Publicaciones[] = [];
  users: Usuarios[] = [];
  page!: number;
  homeicon = faHouseLaptop;


  constructor(private service: PostsapiService) { 
    this.service.obtenerPosts().subscribe((publicacion: any)=> {
      this.posts = publicacion;
      this.setUserName();
    })
    this.service.obtenerUsuarios().subscribe((usuario: any)=> {
      this.users = usuario;
      this.setUserName();
    })
  }
  setUserName() {
    if (this.posts && this.users) {
      for(let post of this.posts) {
        for(let user of this.users) {
          if (post.userId === user.id) {
            post.name = user.name
            post.username = user.username
          }
        }
      }
    }
  }
  ngOnInit(): void { }

}
