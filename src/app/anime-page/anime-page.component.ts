import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {IJikanAnime, IJikanVideoEpisode, JikanService} from "../jikan.service";

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.css']
})
export class AnimePageComponent implements OnInit {

  id: number = 0
  anime!: IJikanAnime
  episodes!: IJikanVideoEpisode[]
  apiLoaded: boolean = false

  constructor(
    private route: ActivatedRoute,
    private jikanService: JikanService
  ) { }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(<string>params.get("id"));
    })

    this.jikanService.getAnimeFullById(this.id)
      .subscribe((anime) => {
        this.anime = anime.data;
      })

    this.jikanService.getAnimeVideoEpisodes(this.id)
      .subscribe((episodes) => {
        this.episodes = episodes.data;
      })
  }

}
