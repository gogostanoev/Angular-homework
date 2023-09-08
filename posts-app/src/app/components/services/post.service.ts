import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RawFirestorePost } from 'src/app/interfaces/firestore.post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly firestore: Firestore) {}

  getPost = () => {
    const postsCollection = collection(this.firestore, 'posts');
    const postCollectionData = collectionData(postsCollection, {
      idField: 'id',
    }) as Observable<RawFirestorePost[]>;

    return postCollectionData;
  };
}
