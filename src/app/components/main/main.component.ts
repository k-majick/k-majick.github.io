import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

import { SONGS } from '../../data/songs';
import { ALBUMS } from '../../data/albums';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;

  leftNavDisabled = false;
  rightNavDisabled = false;
  index = 0;
  songs = SONGS;
  albums = ALBUMS;
  playStatus: boolean = false;

  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;

  constructor() { }

  ngOnInit() {
  }

  togglePlay() {
    this.playStatus = !this.playStatus;
  }

  clickItem(item) {
    console.log('item clicked');
  }

  toggleHideSB() {
    this.hideScrollbar = !this.hideScrollbar;
  }

  toggleDisable() {
    this.disabled = !this.disabled;
  }
  toggleXDisable() {
    this.xDisabled = !this.xDisabled;
  }
  toggleYDisable() {
    this.yDisabled = !this.yDisabled;
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

  onSnapAnimationFinished() {
    console.log('snap animation finished');
  }
}
