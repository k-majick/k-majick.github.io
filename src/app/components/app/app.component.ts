import { Component } from '@angular/core';

import { SONGS } from '../../data/songs';
import { ALBUMS } from '../../data/albums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'performante-player';
  menu = document.getElementById("more");
  menuStatus: boolean = false;
  playlistStatus: boolean = false;
  songs = SONGS;
  albums = ALBUMS;
  playStatus: boolean = false;

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
    this.playlistStatus === true ? this.playlistStatus = false : this.playlistStatus = false;
  }

  togglePlaylist() {
    this.playlistStatus = !this.playlistStatus;
    this.menuStatus === true ? this.menuStatus = false : this.menuStatus = false;
  }

  togglePlay() {
    this.playStatus = !this.playStatus;
  }

}
