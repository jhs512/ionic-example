import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResultData } from "../dtos/result-data";
import { Article } from "../dtos/article";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  getArticles(): Observable<ResultData<Article[]>> {
    return this.httpClient.get<ResultData<Article[]>>(
      "http://localhost:8085/api/article/articles"
    );
  }
}
