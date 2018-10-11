import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragScrollModule } from 'ngx-drag-scroll';

import {
  AppComponent,
  MainComponent,
  MenuComponent,
  PlaylistComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlaylistComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    DragScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
