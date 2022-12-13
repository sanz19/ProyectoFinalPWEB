import { Component, OnInit } from '@angular/core';
import { Publicaciones } from '../Modelos/publicaciones';
import { Usuarios } from '../Modelos/usuarios';
import { PostsapiService } from '../postsapi.service';
import { faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent implements OnInit {

  posts: Publicaciones[] = [];
  users: Usuarios[] = [];
  page!: number;
  user = faUser;
  smileicon = faCommentDots;

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
  ngOnInit(): void {
  }

}
