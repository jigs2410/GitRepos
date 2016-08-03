import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../reddit-article/reddit-article.component';

@Component({
  moduleId: module.id,
  selector: 'reddit',
  templateUrl: 'reddit.component.html',
  styleUrls: ['reddit.component.css']
})
export class RedditComponent implements OnInit {
  newtitle: string;
  newlink: string;
  @Input() articles: Article[];

  constructor() { }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
  }
}
