import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AnimePageComponent } from './anime-page/anime-page.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonModule} from "@angular/material/button";
import {YouTubePlayerModule} from "@angular/youtube-player";

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    HeaderComponent,
    AnimePageComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        NgOptimizedImage,
        HttpClientModule,
        FormsModule,
        MatPaginatorModule,
        AppRoutingModule,
        MatChipsModule,
        MatButtonModule,
        YouTubePlayerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
