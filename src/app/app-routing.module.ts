import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'tab-movie', loadChildren: './tab-movie/tab-movie.module#TabMoviePageModule' },
  // { path: 'tab-serie', loadChildren: './tab-serie/tab-serie.module#TabSeriePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }