import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { SearchService } from '../search.service';
import { homedir } from 'os';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }
  private searchService: SearchService; 
  keyword : string;
  searchForm: FormGroup;
  home : HomeComponent

  ngOnInit() {
  }

  goToCreatePost() {
    this.router.navigateByUrl('/create-post');
  }

  goToCreateTopic() {
    this.router.navigateByUrl('/create-topic');
  }
  search(keyword = this.searchForm.get('keyword').value) {
    this.searchService.getPostByKeyword(keyword).subscribe(post => {
      this.home.posts = post;
    });
  }  
}
