import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment.development';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.state';
import { PostsEffects } from './store/posts/posts.effects';


// const firebaseConfig = {
//   apiKey: "AIzaSyBKRfHX0GwgRVR8do4EcJmWRnqE2AJokKo",
//   authDomain: "post-management-91e8d.firebaseapp.com",
//   projectId: "post-management-91e8d",
//   storageBucket: "post-management-91e8d.appspot.com",
//   messagingSenderId: "208963232849",
//   appId: "1:208963232849:web:9e299cc43f008de1874470",
//   measurementId: "G-PB6XXPY0EN"
// };

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PostsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
