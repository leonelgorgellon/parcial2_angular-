import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comentarios! : Comentario[];

  constructor(private commentService: CommentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  obtenerComentarios(){
    this.commentService.getComments().subscribe(
      data => {
        this.comentarios = data.filter(x => x.postId == this.route.snapshot.params["id"])
      },
      error => console.error('Fallo el request a la api de comentarios.')
    )
  }

  


}
