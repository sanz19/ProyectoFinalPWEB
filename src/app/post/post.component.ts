import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Publicaciones } from '../Modelos/publicaciones';
import { Usuarios } from '../Modelos/usuarios';
import { PostsapiService } from '../postsapi.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: any;
  posts: any;
  users: any;
  user = faUser;
  constructor(private service: PostsapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerPost(this.id).subscribe((resp: any) => {
      this.posts = resp;
      console.log(resp);
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
  }
