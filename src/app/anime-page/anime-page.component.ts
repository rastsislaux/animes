import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {IJikanAnime, JikanService} from "../jikan.service";

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.css']
})
export class AnimePageComponent implements OnInit {

  id: number = 0
  anime!: IJikanAnime

  constructor(
    private route: ActivatedRoute,
    private jikanService: JikanService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(<string>params.get("id"))
    })

    this.jikanService.getAnimeFullById(this.id).subscribe((anime) => {
      this.anime = anime.data;
    })
  }

}
