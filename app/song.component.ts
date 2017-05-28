
	
import { Component , Input } from '@angular/core';

import { Song } from './classes/song';



@Component({
  moduleId: module.id,
  selector: 'my-song',
  templateUrl: 'song.component.html',
  styleUrls: [ 'song.component.css' ]
})

export class SongComponent  {
	@Input()
	currentSong : Song ;

}