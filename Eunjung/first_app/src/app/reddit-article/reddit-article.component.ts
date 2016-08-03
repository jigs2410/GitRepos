import { Component, OnInit, Input } from '@angular/core';
import {Injectable} from '@angular/core';

@Injectable()
export class Article {
  votes: number;
  title: string;
  link: string;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }
  voteDown(): void {
    this.votes -= 1;
  }
  domain(): string {
    try {
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}

@Component({
  moduleId: module.id,
  selector: 'reddit-article',
  host: {
    class: 'row'
  },
  templateUrl: 'reddit-article.component.html',
  styleUrls: ['reddit-article.component.css']

})

export class RedditArticleComponent implements OnInit {
 //article: Article;
  @Input() article:Article;

  constructor ( ) {
     // this.article = new Article('Angular 2', 'http://angular.io', 10);
  }

  ngOnInit() {
  }

  voteUp() {
     this.article.voteUp();
     return false;
  }
  voteDown() {
     this.article.voteDown();
     return false;
  }

 /* addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
     console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    // this.article.push(new Article(title.value, link.value, 0));
   //  title.value = '';
    // link.value='';
  }*/
}
