import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsapiService } from '../postsapi.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id: any;
  post: any;
  constructor(private service: PostsapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerComentarioPost(this.id).subscribe((resp: any) => {
      this.post = resp;
      console.log(resp);
    })
  }

}
