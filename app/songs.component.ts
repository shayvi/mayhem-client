import { Component, OnInit } from '@angular/core';
import { Song } from './classes/song';
import { SongService }   from './song.service';

import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-songs',
  templateUrl: 'songs.component.html',
  styleUrls: [ 'songs.component.css' ]
})

export class SongsComponent implements OnInit {
  songs: Song[];
  selectedSong: Song;
  mode = 'Observable';


  constructor(
    private router: Router,
    private songService: SongService) {}

  getSongs(): void {
    this.songService.getSongs().subscribe(songs => this.songs = songs);
  }

  ngOnInit(): void {
    this.getSongs();
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedSong.name]);
  }
}

