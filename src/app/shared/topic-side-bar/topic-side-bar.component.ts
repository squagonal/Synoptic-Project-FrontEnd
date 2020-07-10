import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/Topic/Topic.service';
import { TopicModel } from 'src/app/Topic/Topic-response';

@Component({
  selector: 'app-Topic-side-bar',
  templateUrl: './Topic-side-bar.component.html',
  styleUrls: ['./Topic-side-bar.component.css']
})
export class TopicSideBarComponent implements OnInit {
  Topics: Array<TopicModel> = [];
  displayViewAll: boolean;

  constructor(private TopicService: TopicService) {
    this.TopicService.getAllTopics().subscribe(data => {
      if (data.length > 3) {
        this.Topics = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.Topics = data;
      }
    });
  }

  ngOnInit(): void { }

}
