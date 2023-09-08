import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post.interface';

export const FETCH_POSTS = '[Posts] Fetch Posts';
export const FETCH_POSTS_SUCCESS = '[Posts] Fetch Posts Success';

export const CREATE_POST = '[Posts] Create Post';
export const CREATE_POST_SUCCESS = '[Posts] Create Post Success';

export const fetchPosts = createAction(FETCH_POSTS);
export const fetchPostsSuccess = createAction(
  FETCH_POSTS_SUCCESS,
  props<{ posts: Post[] }>()
);
