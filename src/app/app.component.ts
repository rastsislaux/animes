import {Component, OnInit} from '@angular/core';
import {IJikanAnime, IJikanResponse, JikanService} from "./jikan.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'animes'

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
      (resp: IJikanResponse) => {
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
