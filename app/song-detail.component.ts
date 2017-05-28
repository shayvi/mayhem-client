import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Song } from './classes/song';
import { SongService } from './song.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-song-detail',
  templateUrl: 'song-detail.component.html',
   styleUrls: [ 'song-detail.component.css' ]
  
})

export class SongDetailComponent implements OnInit {

  song: Song;
  
  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.songService.getSong(params['name']))
    .subscribe(song => this.song = song);
}
  
  constructor(
  private songService: SongService,
  private route: ActivatedRoute,
  private location: Location
  ) {}
  
  goBack(): void {
  this.location.back();
}

}
