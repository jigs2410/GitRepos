import { Component } from '@angular/core';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { RedditComponent } from './reddit/reddit.component';
import { RedditArticleComponent, Article} from './reddit-article/reddit-article.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HelloworldComponent,
    RedditComponent,
    RedditArticleComponent]
})

export class AppComponent {
  title = 'My first App!';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 10),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
