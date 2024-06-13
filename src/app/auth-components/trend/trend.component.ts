import { Component, OnInit } from '@angular/core';
import { TrendService } from './trend-services/trend.service';
import { PostDTO } from '../latest/latest-services/latest.service';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrl: './trend.component.css'
})
export class TrendComponent implements OnInit {
  archivedPosts: PostDTO[] = [];
  archivedPostsOfTypeFirst: PostDTO[] = []; // Ajout d'un tableau pour les posts archivés du type 'first'

  searchCriteria = { name: '', category: '' };







  constructor(private trendService: TrendService) {}

  ngOnInit(): void {
    this.loadArchivedPostsByType('trend');
  }
  searchPosts(): void {
    const { name, category } = this.searchCriteria;
    this.trendService.searchArchivedPosts(name, category).subscribe(archivedPosts => {
      this.archivedPosts = archivedPosts.map(post => ({
        ...post,
        processedImg: this.processImage(post.byteImg ?? '')
      }));
    });
  }

  loadArchivedPostsByType(type: string): void {
    this.trendService.getArchivedPostsByType(type).subscribe(archivedPosts => {
        this.archivedPosts = archivedPosts.map(post => ({
            ...post,
            processedImg: this.processImage(post.byteImg)
        }));
    });
}

  private processImage(base64Img: string): string {
    return `data:image/jpeg;base64,${base64Img}`;
  }
  }
  // Autres méthodes...


