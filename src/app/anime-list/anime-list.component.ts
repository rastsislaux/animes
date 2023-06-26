import { Component } from '@angular/core';
import {IJikanAnime, IJikanPaginatedResponse, JikanService} from "../jikan.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  constructor(private jikanService: JikanService) { }

  items: IJikanAnime[] = [];
  searchQuery: string = "";
  totalItems: number = 100;
  pageSize: number = 8;
  currentPage: number = 0;

  updateAnimes() {
    let params = {
      q: this.searchQuery,
      page: this.currentPage + 1,
      limit: this.pageSize
    }
    this.jikanService.getAnimeSearch(params).subscribe(
      (resp: IJikanPaginatedResponse) => {
        this.items = resp.data;
        this.totalItems = resp.pagination.items.total;
      }
    );
  }

  onQueryChange() {
    this.updateAnimes();
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateAnimes();
  }

  ngOnInit() {
    this.updateAnimes()
  }

}
