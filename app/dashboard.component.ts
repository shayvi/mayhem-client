import { Component, OnInit } from '@angular/core';

import { Song } from './classes/song';

import { SongService } from './song.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  songs: Song[] = [];

test: String;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongs()
        .subscribe(songs => this.songs = songs);
      //.subscribe(songs => this.songs = songs.slice(0, 5));

  }
}