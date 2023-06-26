import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimeListComponent} from "./anime-list/anime-list.component";
import {AnimePageComponent} from "./anime-page/anime-page.component";

const routes: Routes = [
  { path: '', component: AnimeListComponent },
  { path: 'anime/:id', component: AnimePageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
