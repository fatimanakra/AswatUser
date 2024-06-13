import { Injectable } from '@angular/core';
import { Post } from '../../../post.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  private favorites: Post[] = this.loadFavorites();
  private favoritesSubject = new BehaviorSubject<Post[]>(this.favorites);

  getFavorites() {
    return this.favoritesSubject.asObservable();
  }

  addFavorite(post: Post) {
    this.favorites.push(post);
    this.saveFavorites();
    this.favoritesSubject.next(this.favorites);
  }

  private saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  private loadFavorites(): Post[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }
}
