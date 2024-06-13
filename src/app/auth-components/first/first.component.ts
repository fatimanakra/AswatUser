import { Component, OnInit } from '@angular/core';
import { FirstService } from './first-services/first.service';
import { PostDTO } from '../latest/latest-services/latest.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  archivedPosts: PostDTO[] = [];
  searchCriteria = { name: '', category: '' };
  constructor(private firstService: FirstService) {}

  ngOnInit(): void {
    this.loadArchivedPostsByType('first');
  }
  searchPosts(): void {
    const { name, category } = this.searchCriteria;
    this.firstService.searchArchivedPosts(name, category).subscribe(archivedPosts => {
      this.archivedPosts = archivedPosts.map(post => ({
        ...post,
        processedImg: this.processImage(post.byteImg ?? '')
      }));
    });
  }
  loadArchivedPostsByType(type: string): void {
    this.firstService.getArchivedPostsByType(type).subscribe(archivedPosts => {
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
