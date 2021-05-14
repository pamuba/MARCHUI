import { Component, OnInit } from '@angular/core';
import { Video } from '../video'
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos:any = []

  hidenewVideo:boolean = true;
  selectedVideo:Video;
  constructor(private _videoService: VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos()
          .subscribe(resVideoData => {
            
            for(const d of (resVideoData as any)){
                this.videos.push(d);
            }
          })

          console.log(this.videos.length)
  }

  onSelectedVideo(video:any){
    this.selectedVideo = video;
    this.hidenewVideo = true;
  }

  onSubmitAddVideo(video:Video){
    this._videoService.addVideo(video)
        .subscribe(resNewVideo => {
          this.videos.push(resNewVideo);
          this.hidenewVideo = true;
          this.selectedVideo = resNewVideo;
        })
  }
  onUpdateVideoEvent(video:any){
    this._videoService.updateVideo(video)
        .subscribe(resUpdatedVideo => video = resUpdatedVideo)
    this.selectedVideo = null;
  }
  newVideo(){
    this.hidenewVideo = false;
  }

}
