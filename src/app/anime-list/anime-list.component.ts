import {Component, OnInit} from '@angular/core';
import {IJikanAnime, IJikanPaginatedResponse, JikanService} from "../jikan.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
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
      (resp) => {
        this.items = resp.data;
        this.totalItems = resp.pagination.items.total;
      }
    );
  }

  onQueryChange() {
    this.currentPage = 0;
    this.updateAnimes();
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex
    this.updateAnimes();
  }

  ngOnInit() {
    this.updateAnimes()
  }

}
