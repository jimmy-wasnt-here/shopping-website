import { Component, OnInit } from '@angular/core';
import SampleJSON from 'src/assets/json/main-content.json';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  products = SampleJSON.products;

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }

}
