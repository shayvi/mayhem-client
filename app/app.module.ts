import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { SongDetailComponent }  from './song-detail.component';
import { SongService }          from './song.service';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';


import { NewSongComponent }      from './new-song.component';
import { SongsComponent }      from './songs.component';
import { StatisticsComponent }      from './statistics.component';
import { SongComponent }      from './song.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SongDetailComponent,
    SongsComponent,
	NewSongComponent,
	StatisticsComponent,
	SongComponent
  ],
  providers: [ SongService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
