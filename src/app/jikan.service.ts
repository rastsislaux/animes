import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

export interface IAnimeSearchParams {
  q?: string,
  page?: number,
  limit?: number
}

export interface IJikanResponse {
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

export interface IJikanAnime {
  title: string
  title_japanese: string
  synopsis: string
  images: IJikanImages
}

export interface IJikanImages {
  jpg: IJikanImagesJpg
}

export interface IJikanImagesJpg {
  image_url: string,
  small_image_url: string,
  large_image_url: string
}

@Injectable({
  providedIn: 'root'
})
export class JikanService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.jikanApiUrl

  getAnimeSearch(params: IAnimeSearchParams): Observable<IJikanResponse> {
    return this.http.get<IJikanResponse>(this.apiUrl + "/anime", {
      params: { ...params }
    })
  }

}
