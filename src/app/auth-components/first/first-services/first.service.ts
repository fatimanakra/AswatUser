import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostDTO } from '../../latest/latest-services/latest.service';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  private SERVER_URL = 'http://localhost:8081/api/customer';

  constructor(private http: HttpClient) { }

  archiveAndRemovePost(id: number): Observable<void> {
    return this.http.put<void>(`${this.SERVER_URL}/${id}/archive`, {});
  }

  getArchivedPostsByType(type: string): Observable<PostDTO[]> {
    return this.http.get<PostDTO[]>(`${this.SERVER_URL}/posts/archived?type=${type}`);
  }
archivePost(postId: number): Observable<void> {
  return this.http.put<void>(`${this.SERVER_URL}/posts/${postId}/archive`, {});
}


searchArchivedPosts(name: string, category: string): Observable<PostDTO[]> {
  let params = new HttpParams();
  if (name) {
    params = params.set('name', name);
  }
  if (category) {
    params = params.set('category', category);
  }
  return this.http.get<PostDTO[]>(`${this.SERVER_URL}/archived/search`, { params });
}
}
