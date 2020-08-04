import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../../../services/article.service";
import { ResultData } from "src/app/dtos/result-data";
import { Article } from "src/app/dtos/article";

@UntilDestroy()
@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"],
})
export class ListPage implements OnInit {
  public articles: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService
      .getArticles()
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.articles = data.data;
      });
  }
}
