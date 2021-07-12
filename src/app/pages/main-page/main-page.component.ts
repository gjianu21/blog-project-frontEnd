import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  articles: Articles[]= [];
  modalArt: Articles;

  @Output() _getArticles = new EventEmitter();

  constructor(private articleService: ArticlesService) {
    this.modalArt = {
      title: '',
      author: '',
      dateTime: '',
      imgUrl: '',
      summary: '',
      content: '',
      destination: '',
      tag: ''
    }
   }

  ngOnInit(): void {
    this.getArticlesFromServer();
  }

  getArticleTo(){
    this._getArticles.emit(this.getArticlesFromServer());
  }

  getArticlesFromServer(): void{
    this.articleService.getArticles().subscribe(response => {
      this.articles = response;
      console.log('articles', this.articles)
    })
  }

}
