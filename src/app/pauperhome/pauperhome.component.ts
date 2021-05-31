import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostapiService } from '../postapi.service';

@Component({
  selector: 'app-pauperhome',
  templateUrl: './pauperhome.component.html',
  styleUrls: ['./pauperhome.component.css']
})
export class PauperhomeComponent implements OnInit {

  posts:Post[] = [];
  

  constructor(private postapiService:PostapiService) {

   }

  ngOnInit(): void {
    this.getPauperPosts();
  }

  getPauperPosts():void{
    this.postapiService.getPauper().subscribe(
      (response:any) =>{
        response.data.children.forEach((p: { data: { title: any; thumbnail: any; url: any; }; }) =>{
          let newPost: Post = {
            title :p.data.title,
            image:p.data.thumbnail,
            // link:p.data.permalink,
            link:p.data.url,
          }
          this.posts.push(newPost);
        });
        console.log(response);
      }
    )
  }
}
