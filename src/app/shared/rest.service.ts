import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Review, ReviewMeta} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient
  ) {}

  loadFile(file: File): Observable<any> {
    const formData = new FormData()
    formData.append('excel', file)
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    })

    return this.http.post('http://localhost:5050/api/file', formData, {headers})
  }

  getFile(id: string): Observable<any> {
    // return this.http.get(`/api/file/${id}`)

    const review: Review = {
      coordinates:
        {lat: 0, long: 0},
      label: 'kek',
      relevanceDate: new Date(),
      complexity: 'easy',
      condition: 3,
      dateAdded: new Date(),
      daysToRecover: 0,
      id: 'asssxd79789',
      name: 'Road',
      objectType: 'road'
    }

    return of(review)
  }

  updateFile(file: File, id: string): Observable<any> {
    const formData = new FormData()
    formData.append('file', file)
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    })

    return this.http.patch(`/api/file/${id}`, formData, {headers})
  }

  deleteFile(id: string): Observable<any> {
    return this.http.delete(`/api/file/${id}`)
  }

  getAllFiles(): Observable<any> {
    return this.http.get(`/api/file`)
  }

  getFilesMeta(chunk: number): Observable<ReviewMeta[]> {
    // return this.http.get(`/api/file?meta=true`)
    const reviewPreview: ReviewMeta = {
      complexity: 'easy',
      condition: 3,
      dateAdded: new Date(),
      daysToRecover: 0,
      id: 'asssxd79789',
      name: 'Road',
      objectType: 'road',
    }
    return of(Array(chunk).fill(reviewPreview))
  }

  getFinalReview(): Observable<any> {
    return this.http.get('/api/review')
  }

}
