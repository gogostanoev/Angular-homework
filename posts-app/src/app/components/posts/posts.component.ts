import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post.interface';
import { AppState } from 'src/app/store/app.state';
import { fetchPosts } from 'src/app/store/posts/posts.actions';
import { selectPosts } from 'src/app/store/posts/posts.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private readonly store: Store<AppState>) {}

  posts: Post[];

  ngOnInit(): void {
    this.store.dispatch(fetchPosts());

    this.store.select(selectPosts).subscribe((postsFromStore) => {
      this.posts = postsFromStore;
    });
  }
}
