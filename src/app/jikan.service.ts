import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

export interface IAnimeSearchParams {
  q?: string,
  page?: number,
  limit?: number
}

export interface IJikanPaginatedResponse {
  data: IJikanAnime[],
  pagination: IJikanPagination
}

export interface IJikanPagination {
  current_page: number,
  has_next_page: boolean,
  last_visible_page: number,
  items: IJikanPaginationItems
}

export interface IJikanPaginationItems {
  count: number,
  total: number,
  per_page: number
}

export interface IJikanAnimeTitle {
  type: string,
  title: string
}

export interface IJikanAnimeTheme {
  openings: string[]
  endings: string[]
}

export interface IJikanAnime {
  mal_id: number,
  title: string
  titles: IJikanAnimeTitle[]
  title_japanese: string
  synopsis: string
  images: IJikanImages
  genres: IJikanGenre[]
  theme: IJikanAnimeTheme
}

export interface IJikanImages {
  jpg: IJikanImagesJpg
}

export interface IJikanGenre {
  mal_id: number,
  type: string,
  name: string,
  url: string
}

export interface IJikanImagesJpg {
  image_url: string,
  small_image_url: string,
  large_image_url: string
}

export interface IJikanResponse {
  data: IJikanAnime
}

@Injectable({
  providedIn: 'root'
})
export class JikanService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.jikanApiUrl

  getAnimeSearch(params: IAnimeSearchParams): Observable<IJikanPaginatedResponse> {
    return this.http.get<IJikanPaginatedResponse>(this.apiUrl + "/anime", {
      params: { ...params }
    })
  }

  getAnimeFullById(id: number): Observable<IJikanResponse> {
    return this.http.get<IJikanResponse>(this.apiUrl + "/anime/" + id + "/full")
  }

}
