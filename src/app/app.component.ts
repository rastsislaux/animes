import {Component, OnInit} from '@angular/core';
import {IJikanAnime, IJikanPaginatedResponse, JikanService} from "./jikan.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'animes'

}
