import { Component, OnInit } from '@angular/core';
import { TopicModel } from '../Topic-response';
import { TopicService } from '../Topic.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-topics',
  templateUrl: './list-topics.component.html',
  styleUrls: ['./list-topics.component.css']
})
export class ListTopicsComponent implements OnInit {

  Topics: Array<TopicModel>;
  constructor(private TopicService: TopicService) { }

  ngOnInit() {
    this.TopicService.getAllTopics().subscribe(data => {
      this.Topics = data;
    }, error => {
      throwError(error);
    })
  }
}