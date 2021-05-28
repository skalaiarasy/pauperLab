import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-pauperpost',
  templateUrl: './pauperpost.component.html',
  styleUrls: ['./pauperpost.component.css']
})
export class PauperpostComponent implements OnInit {
  @Input() pauper:Post = {
    title:"",
    image:"",
    link:"",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
