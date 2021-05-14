import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';


@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
   @Input() videos;
   @Output() SelectedVideo = new EventEmitter() 
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vid:Video){
    this.SelectedVideo.emit(vid);
  }

}
