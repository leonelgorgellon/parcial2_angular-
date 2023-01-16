import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts-user',
  templateUrl: './posts-user.component.html',
  styleUrls: ['./posts-user.component.css']
})
export class PostsUserComponent implements OnInit {

  user = localStorage.getItem('Usuario')
  posts! :Post []


  constructor(private postService: PostsService) {
    
   }

   ngOnInit(): void {   
    this.obtenerPosts();
  }

  obtenerPosts(){
    this.postService.getPostsByUser().subscribe(
      data => {
        this.posts = data.filter(x => x.userId.toString() == localStorage.getItem('Id'))
      },
      error => console.error("Fallo el request al api de posteos.")
    )
  }; 
  
  
  }



  
