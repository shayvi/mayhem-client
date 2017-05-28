import { Component, OnInit } from '@angular/core';

import { Song } from './classes/song';
import { SongService } from './song.service';

@Component({
  moduleId: module.id,
  selector: 'my-statistics',
  templateUrl: 'statistics.component.html',
  styleUrls: [ 'statistics.component.css' ]
})

export class StatisticsComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs()
      .subscribe(songs => this.songs = songs.slice(0, 5));
  }
}