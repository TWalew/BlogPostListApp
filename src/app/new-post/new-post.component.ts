import { Component, OnInit } from '@angular/core';
import { PostListService } from '../service/post-list.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postListService: PostListService, private router: Router) { }

  ngOnInit() {
  }

  onAdd(itemTitle, itemContent) {
    this.postListService.addBlogPost(itemTitle.value, itemContent.value);
    this.router.navigate(['/posts']);
  }
}
