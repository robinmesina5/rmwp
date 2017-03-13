import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Post } from './post';

@Injectable()
export class PostsService {

  private postsUrl = "http://www.guidepoint.com/wp-json/wp/v2/";
  // private postsUrl = "http://intranet.guidepoint.com/wp-json/wp/v2/";
  
  constructor(private http: Http) { }
  
  getPosts(): Observable<Post[]> {
    return this.http
      .get(this.postsUrl + 'posts')
      .map((res: Response) => res.json());
  }

}