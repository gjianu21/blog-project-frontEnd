import { Component, Input, OnInit } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(
    private articleService: ArticlesService
  ) { }

  @Input() art: Articles;
  @Input() getArticles: void; 

  ngOnInit(): void {
  }

}
