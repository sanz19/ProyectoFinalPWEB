import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsapiService } from '../postsapi.service';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: any;
  users: any;
  user = faUser;

  constructor(private service: PostsapiService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerUsuario(this.id).subscribe((usuario: any)=> {
      this.users = usuario;
    });

    
  }

  ngOnInit(): void {

  }

}
