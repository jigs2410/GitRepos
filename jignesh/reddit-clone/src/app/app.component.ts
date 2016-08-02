import { Component,Injectable } from '@angular/core';

@Injectable()
class Article {

  title : string;
  link :string;
  votes :number;

  constructor (title:string, link: string,votes?:number)
  {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;

  }
  voteUp() : void {
    this.votes +=1;

  }

  voteDown() : void {
    this.votes -=1;

  }

  domain() {
    try {
      const link:string = this.link.split('//')[1];
      return link.split('/')[0];

    }catch (err) {
      return null;

    }

  }

}


@Component({
  selector :'add-article',
  inputs :['onAddArticle'],
  template :`
      <form 
        (ngSubmit) = "addArticle(newtitle,newlink)"
        class = "ui large form segment">
        <h3 class = "ui header"> Add a link </h3>

        <div class ="field">
        <label for = "title">Title:</label>
        <input name = "title" #newtitle />
        </div>

         <div class ="field">
        <label for = "link">Link: </label>
        <input name = "link" #newlink />
        </div>

        <input type ="submit"
               value = "Submit link"
               class = "ui positive right floated button" /> 
       </form>        
  
  `

})

class AddArticleComponent{
   onAddArticle :Function;
    
    addArticle(newtitle:HTMLInputElement, newlink:HTMLInputElement)
    {
      console.log("We are adding article",newtitle.value,newlink.value);
      const article = new Article (newtitle.value,newlink.value);
      this.onAddArticle(article);
      newtitle.value="";
      newlink.value="";
    }


}




@Component ({
selector : 'article-component',
template : `


  <div class = "four wide column center aligned votes">
        <div class ="ui statistic">
            <div class ="value"> {{ article.votes }}</div>
            <div class="label"> Points </div>
        </div>
    </div>

  <div class ="twelve wide column">
    <a class = "ui header large" href = "{{article.link}}">{{article.title}}</a>
    <div class = "meta"> ({{ article.domain()}}) </div>

    <a href (click) = "voteUp()">
      <i class = "arrow up icon"></i>
      Upvote
     </a>
    <a href (click) = "voteDown()" >
      <i class = "arrow down icon"></i>
      Downvote
    </a>
 </div>


`,
inputs : ['article'],

host :{
  class : 'row'

}


})

class ArticleComponent
{
    article: Article;

   

    voteUp():boolean {
      this.article.voteUp();
      return false;
    }

     voteDown():boolean {
      this.article.voteDown();return false;
    }
}


@Component({
  moduleId: module.id,
  selector: 'my-app',

  templateUrl: 'app.component.html',
 // styleUrls: ['app.component.css']
 
 directives : [ArticleComponent, AddArticleComponent],
 providers:[Article]
})

export class AppComponent {
  
  articles :Article[];

  onAddArticleCallback : Function;

  constructor(){
    // this.articles= [
    //   {
    //     title : 'ng-newletter',
    //     link : 'http://ng-newsletter.com'
    //   },
    //   {
    //     title : 'ng-book 2',
    //     link : 'http://ng-book.com/2'
    //   },
    //   {
    //     title : 'google',
    //     link : 'http://google.com'
    //   },
    //   {
    //     title : 'yahoo',
    //     link : 'http://yahoo.com'
    //   },
    // ]

     this.articles= [ new Article('ng-newletter','http://ng-newsletter.com'),
                      new Article('ng-book 2','http://ng-book.com/2'),
                      new Article('google','http://google.com'),
                      new Article('yahoo','http://yahoo.com')];

    this.onAddArticleCallback = this.onAddArticle.bind(this);
  }

  run(){
   // this.articles.forEach(function(farticle){ console.log(farticle.title + " "+ farticle.link);})
       this.articles.forEach((farticle) => console.log(farticle.title + " "+ farticle.link));
  }
  onAddArticle(article:Article):void{
    console.log('onAddArticle called in AppCompoment with an argument',article);
    this.articles.push(article);
    this.run();
  }

  sortedArticles():Article[] {
   return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);

    //return this.articles.sort((a: Article,b: Article) => b.votes - a.votes);
  }
}
