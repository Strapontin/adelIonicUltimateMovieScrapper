import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
			{ path: 'tab-movie', loadChildren: '../tab-movie/tab-movie.module#TabMoviePageModule' },
			{ path: 'tab-serie', loadChildren: '../tab-serie/tab-serie.module#TabSeriePageModule' },
      	]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
