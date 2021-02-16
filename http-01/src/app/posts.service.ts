import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  createAndStorePost(post: Post) {
    this.http
      .post(
        "https://ng-complete-guide-3f750-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
        post
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  constructor(private http: HttpClient) {}

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        "https://ng-complete-guide-3f750-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
      )
      .pipe(
        map((response) => {
          console.log(response);
          const posts: Post[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              posts.push({ ...response[key], id: key });
            }
          }
          return posts;
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      "https://ng-complete-guide-3f750-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
    );
  }
}
