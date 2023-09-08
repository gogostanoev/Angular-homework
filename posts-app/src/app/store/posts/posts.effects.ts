import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostActions from './posts.actions';
import { map, switchMap } from 'rxjs';
import { PostService } from 'src/app/components/services/post.service';
import { Post } from 'src/app/interfaces/post.interface';

@Injectable()
export class PostsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly postService: PostService
  ) {}

  fetchPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.FETCH_POSTS),
      switchMap(() =>
        this.postService.getPost().pipe(
          map((data) => {
            console.log(data);

            const posts: Post[] = data.map((postDocument) => {
              return {
                id: postDocument.id,
                title: postDocument.title,
                content: postDocument.content,
                author: postDocument.author,
                createdAt: postDocument.createdAt.toDate(),
              };
            });

            return PostActions.fetchPostsSuccess({ posts: posts });
          })
        )
      )
    )
  );
}
