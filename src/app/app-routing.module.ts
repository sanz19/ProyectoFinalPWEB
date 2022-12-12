import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PostslistComponent } from './postslist/postslist.component';

const routes: Routes = [
  { path: "home", component: PostsComponent },
  { path: "allposts", component: PostsComponent },
  { path: "postslist", component: PostslistComponent },
  { path: "post/:id", component: PostComponent },
  { path: ":id/comments", component: CommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
