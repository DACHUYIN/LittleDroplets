import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { Register } from './components/register.component';
import { Login } from './components/login.component';
import { MyAlbum } from './components/my-album.component';
import { AddPhoto } from './components/add-photo.component';
import { ImageDetail } from './components/image-detail.component';
import { ImageComments } from './components/image-comments.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'my-album', component: MyAlbum },
  { path: 'add-photo', component: AddPhoto },
  { path: 'image-detail/:id', component: ImageDetail }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
