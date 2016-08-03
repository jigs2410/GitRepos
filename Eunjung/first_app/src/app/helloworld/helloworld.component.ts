import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hello-world',
  templateUrl: 'helloworld.component.html',
  styleUrls: ['helloworld.component.css'],
})
export class HelloworldComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Ari','Carlos','Felipe','Nate'];
  }

  ngOnInit() {
    
  }

}
