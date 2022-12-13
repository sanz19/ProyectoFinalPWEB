import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { PostsapiService } from '../postsapi.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: any;
  userId = 0;
  posts: any;
  users: any;
  verComentarios: boolean = false;
  user = faUser;
  

  constructor(private service: PostsapiService, private route: ActivatedRoute) { 
    this.verComentarios = false;
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerPost(this.id).subscribe((publicacion: any)=> {
      this.userId = publicacion.userId;
      this.posts = publicacion;
      console.log(typeof(this.userId));
      console.log(typeof(publicacion.userId));
      this.service.obtenerUsuario(publicacion.userId).subscribe((usuario: any)=> {
        this.users = usuario;
      });
    });
  }

  ngOnInit(): void {
    this.verComentarios = false;
  }
  
  }
