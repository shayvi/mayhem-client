import { Component, Input, OnInit } from '@angular/core';

import { Song } from './classes/song';
import { SongService } from './song.service';


@Component({
  moduleId: module.id,
  selector: 'my-newsong',
  templateUrl: 'new-song.component.html',
   styleUrls: [ 'song-detail.component.css' ]
  
})

export class NewSongComponent{

  bandName : String;


}
