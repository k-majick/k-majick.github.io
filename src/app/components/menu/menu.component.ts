import { Component, OnInit } from '@angular/core';

import { ALBUMS } from '../../data/albums';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  albums = ALBUMS;

  constructor() { }

  ngOnInit() {
  }

}
