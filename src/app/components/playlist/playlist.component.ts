import { Component, OnInit, Input } from '@angular/core';

import { SONGS } from '../../data/songs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
})
export class PlaylistComponent implements OnInit {

  songs = SONGS;

  constructor() { }

  ngOnInit() {
  }

  @Input() hideDiv = false;

}
