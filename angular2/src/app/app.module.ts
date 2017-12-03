import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhotoList } from './components/photo-list.component';
import { SidePanel } from './components/side-panel.component';
import { HomeComponent } from './components/home.component';
import { NavBar } from './components/nav-bar.component';
import { AppRoutingModule } from './app.routing';
import { PhotoService } from './services/photo.service';
import { RegisterService } from './services/register.service';
import { Register } from './components/register.component';
import { Login } from './components/login.component';
import { LoginService } from './services/login.service';
import { MyAlbum } from './components/my-album.component';
import { UserService } from './services/user.service';
import { AddPhoto } from './components/add-photo.component';
import { AddPhotoService } from './services/add-photo.service';
import { UploadPhotoService } from './services/upload-photo.service';
import { CommentService } from './services/comment.service';
import { ImageDetail } from './components/image-detail.component';
import { ImageComments } from './components/image-comments.component';
import { PhotoRow } from './components/photo-row.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoList,
    SidePanel,
    NavBar,
    HomeComponent,
    Register,
    Login,
    MyAlbum,
    AddPhoto,
    ImageComments,
    ImageDetail,
    PhotoRow
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PhotoService,
    RegisterService,
    LoginService,
    UserService,
    AddPhotoService,
    UploadPhotoService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
