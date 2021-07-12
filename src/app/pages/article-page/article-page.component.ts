import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  article: Articles;
  articleNumber;
  constructor(
    private articleService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  @Input() art: Articles;
  @Input() getArticles: void; 

  ngOnInit(): void {
    this.articleNumber = this.route.snapshot.paramMap.get('id');
    console.log('articles id: ', this.articleNumber);
    this.getArticleFromServer(this.articleNumber)
  }

  getArticleFromServer(articleId: number): void{
    this.articleService.getArticle(articleId).subscribe(response => {
      this.article = response;
      console.log('articles', this.article)
    })
  }

}
