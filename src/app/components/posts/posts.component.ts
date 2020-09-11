import {Component, Input, OnInit} from '@angular/core';
import {PostsModel} from '../../models/post.model';
import {PostsService} from '../../sevices/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post: PostsModel;

  constructor(private dataService: PostsService) {
    this.dataService.getPost().subscribe(post => {
      this.post = post;
    });
  }

  ngOnInit(): void {
  }

  showPost(value: string): void {
    this.dataService.getPost(+value).subscribe(post => {
      this.post = post;
    });
  }
}
