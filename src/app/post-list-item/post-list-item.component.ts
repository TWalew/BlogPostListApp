import { Component, Input } from '@angular/core';
import { PostListService } from '../service/post-list.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  constructor(private postListService: PostListService) { }

  private _post = {};
  private _lovelts = 1;

  @Input()
  set post(post) {
    this._post = post;
  }

  get post() { return this._post; }

  onDelete($key: string){
    this.postListService.removeBlogPost($key);
  }

  updateLovelts(direction){
    if(this._lovelts >= 0){
      this._lovelts += direction;
      if(this._lovelts < 0) this._lovelts = 0;
    }
  }
}
