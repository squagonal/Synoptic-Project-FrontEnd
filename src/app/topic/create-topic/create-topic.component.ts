import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TopicModel } from '../Topic-response';
import { Router } from '@angular/router';
import { TopicService } from '../Topic.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {
  createTopicForm: FormGroup;
  TopicModel: TopicModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private TopicService: TopicService) {
    this.createTopicForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.TopicModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createTopic() {
    this.TopicModel.name = this.createTopicForm.get('title')
    .value;
    this.TopicModel.description = this.createTopicForm.get('description')
    .value;
    this.TopicService.createTopic(this.TopicModel).subscribe(data => {
      this.router.navigateByUrl('/list-topics');
    }, error => {
      throwError(error);
    })
  }
}