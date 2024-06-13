import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../../../post.models';
import { StorageService } from '../../../auth-services/storage-service/storage.service';

export interface PostDTO {
  id: number;
  typeName: string;
  categoryName: string;

  postedBy: string;
  expirationDate: Date;
  archived: boolean;
  approved: boolean;
  byteImg: string;
  processedImg: string;
  name: string;
  content: string;
  text: string;
  date: Date;
  posted: boolean; // Si c'est optionnel, utilisez ?
  img: string;   
  // Si c'est optionnel, utilisez ?
}



@Injectable({
  providedIn: 'root'
})
export class LatestService {
 
  private SERVER_URL = "http://localhost:8081/api/customer/";
  private newPostSubject = new Subject<PostDTO>();


  constructor(private http: HttpClient, private storageService: StorageService) { }

  getAllCategories(): Observable<any> {
    return this.http.get(this.SERVER_URL + "cats", {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      catchError(this.handleError)
    );
  }
// latest.service.ts

getApprovedPostsByCategory(category: string): Observable<PostDTO[]> {
  return this.http.get<PostDTO[]>(`${this.SERVER_URL}posts/approved-by-category?category=${category}`, {
    headers: this.createAuthorizationHeader(),
  }).pipe(
    catchError(this.handleError)
  );
}

  private createAuthorizationHeader(): HttpHeaders {
    const token = this.storageService.getToken();
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      return new HttpHeaders();
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  getPostById(id: number): Observable<PostDTO> {
    return this.http.get<PostDTO>(`${this.SERVER_URL}posts/${id}`).pipe(
      catchError(this.handleError)
    );
  }


receiveNewPost(): Observable<PostDTO> {
  return this.newPostSubject.asObservable();
}


  archiveAndRemovePost(id: number): Observable<void> {
    return this.http.put<void>(`${this.SERVER_URL}${id}/archive`, {});
  }
  getArchivedPostsByType(type: string): Observable<PostDTO[]> {
    const url = `${this.SERVER_URL}posts/archived?type=${type}`;
    return this.http.get<PostDTO[]>(url);
  }
archivePost(postId: number): Observable<void> {
  return this.http.put<void>(`${this.SERVER_URL}posts/${postId}/archive`, {});
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
