import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
  blogPostsList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getBlogPostsList() {
    this.blogPostsList = this.firebasedb.list('posts');
    return this.blogPostsList;
  }

  addBlogPost(itemtitle, itemContent) {
    let td = new Date();
    let dd = String(td.getDate()).padStart(2, '0');
    let mm = String(td.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = td.getFullYear();
    let today = mm + '/' + dd + '/' + yyyy;

    this.blogPostsList.push({
      title: itemtitle,
      content: itemContent,
      creationDate: today
    });
  }

  removeBlogPost($key: string) {
    this.blogPostsList.remove($key);
  }
}
