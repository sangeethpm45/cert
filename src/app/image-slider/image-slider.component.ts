import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
    {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
    {'image': 'https://picsum.photos/seed/picsum/1200/300'}
  ];
}
