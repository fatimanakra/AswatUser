import { Component, OnInit } from '@angular/core';
import { LatestService, PostDTO } from './latest-services/latest.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent  implements OnInit{
  latestPosts: PostDTO[] = [];
  listOfTypes = []; // Remplir avec les types disponibles
  listOfCategories = []; // Remplir avec les catégories disponibles


  searchCriteria = { name: '', category: '' };

  archivedPosts: PostDTO[] = [];
  archivedPostsOfTypeFirst: PostDTO[] = []; // Ajout d'un tableau pour les posts archivés du type 'first'

  







  constructor(private latestService: LatestService) {}

  ngOnInit(): void {
    this.loadArchivedPostsByType('latest');
  }

  loadArchivedPostsByType(type: string): void {
    this.latestService.getArchivedPostsByType(type).subscribe(archivedPosts => {
        this.archivedPosts = archivedPosts.map(post => ({
            ...post,
            processedImg: this.processImage(post.byteImg)
        }));
    });
}

searchPosts(): void {
  const { name, category } = this.searchCriteria;
  this.latestService.searchArchivedPosts(name, category).subscribe(archivedPosts => {
    this.archivedPosts = archivedPosts.map(post => ({
      ...post,
      processedImg: this.processImage(post.byteImg ?? '')
    }));
  });
}
  private processImage(base64Img: string): string {
    return `data:image/jpeg;base64,${base64Img}`;
  }

  
}
