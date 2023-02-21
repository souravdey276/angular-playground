import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-inpur-error';
import { PostService } from '../services/post.service';
import { NotFoundError } from './../common/not-found-error';
interface Post{
  title?:String,
  id?:number
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];


  constructor(private service: PostService) { }

  ngOnInit(): void {

    this.service.getAll()
      .subscribe(
        (response) => {
          this.posts = response;
        }
      )
  }

  createPost(input: HTMLInputElement) {
    // console.log(input.value)
    let post = { title: input.value, id: 0 }
    this.service.create(post)
      .subscribe(
        (response) => {
          let id = response.id ? response.id : 0
          post.id = id;
          console.log(post)
          this.posts.splice(0, 0, post)
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            alert('Bad Request Error')
          }
          else throw error;
        }

      )

  }

  updatePost(post: Post) {
    post.title = 'Updated:' + post.title;
    this.service.update(post)
      .subscribe(
        (response) => {
          console.log(response)
        }
      )
  }

  deletePost(post: Post) {
    let id = post.id ? post.id : 0;
    this.service.delete(id)
      .subscribe(
        (response) => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post is already deleted')
          }
          else throw error;

        }
      )
  }


}