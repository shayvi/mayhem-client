import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongDetailComponent }  from './song-detail.component';

import { DashboardComponent }   from './dashboard.component';
import { NewSongComponent }      from './new-song.component';
import { StatisticsComponent }      from './statistics.component';
import { SongsComponent }      from './songs.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  
  { path: 'newsong',  component: NewSongComponent },
  { path: 'songs',     component: SongsComponent },
  { path: 'statistics',  component: StatisticsComponent },
	   
  { path: 'detail/:name', component: SongDetailComponent },
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
