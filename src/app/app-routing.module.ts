import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'movie-details/:idMovie', loadChildren: './movie-details/movie-details.module#MovieDetailsPageModule' },
  { path: 'serie-details/:idSerie', loadChildren: './serie-details/serie-details.module#SerieDetailsPageModule' },
  { path: 'serie-details/season-details/:idSerie/:season', loadChildren: './season-details/season-details.module#SeasonDetailsPageModule' },
  { path: 'serie-details/episode-details/:idEpisode', loadChildren: './episode-details/episode-details.module#EpisodeDetailsPageModule' },
  // { path: 'tab-movie', loadChildren: './tab-movie/tab-movie.module#TabMoviePageModule' },
  // { path: 'tab-serie', loadChildren: './tab-serie/tab-serie.module#TabSeriePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
