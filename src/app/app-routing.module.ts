import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full'},
  {
    path: 'films',
    children: [
      {
        path: '',
        loadChildren: () =>
          import("./films/films.module").then(m => m.FilmsPageModule)
      },
      {
        path: ':id',
        loadChildren: () =>
          import("./films/film-details/film-details.module").then(m => m.FilmDetailsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
