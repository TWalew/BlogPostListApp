import { Component, OnInit } from '@angular/core';
import { PostListService } from '../service/post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postListArray: any[];
  constructor(private postListService: PostListService) { }

  ngOnInit() {
    this.postListService.getBlogPostsList().snapshotChanges().subscribe(item => {
      this.postListArray = [];
      console.log(item);
      item.forEach(el => {

        console.log(el);
        let x = el.payload.toJSON();
        x['$key'] = el.key;
        this.postListArray.push(x);
        console.log(x);
      })
    });
  }
}
