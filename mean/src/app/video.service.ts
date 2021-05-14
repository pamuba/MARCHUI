import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private _http:HttpClient) { }
  private _getUrl = "api/videos";
  private _postUrl = "api/video";
  private _putUrl = "api/video/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'jwt-token'
    })
  };

  getVideos(){
    return this._http.get(this._getUrl);
  }

  addVideo(video:Video):Observable<Video>{
    return this._http.post<Video>(this._postUrl, video, this.httpOptions)
                      .pipe();
  }

  updateVideo(video:Video):Observable<Video>{
    return this._http.put<Video>(this._putUrl + video._id, video, this.httpOptions)
                      .pipe();
  }
}
