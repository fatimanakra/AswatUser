import { Component, OnInit } from '@angular/core';
import { LatestService, PostDTO } from '../auth-components/latest/latest-services/latest.service';
import { ActivatedRoute } from '@angular/router';
import { FavorisService } from '../auth-components/favoris/favoris-services/favoris.service';
import { Post } from '../post.models';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: PostDTO | null = null;
  isFavorite: boolean = false; // Propriété pour suivre l'état du favori

  constructor(
    private route: ActivatedRoute,
    private latestService: LatestService,
    private favorisService: FavorisService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      if (!isNaN(id)) {
        this.latestService.getPostById(id).subscribe(post => {
          if (post) {
            this.post = {
              ...post,
              processedImg: this.processImage(post.img)
            };
            this.checkIfFavorite(post.id);
            console.log('Fetched post:', post);
            console.log('Processed post:', this.post);
          }
        });
      }
    }
  }

  private processImage(base64Img: string): string {
    return `data:image/jpeg;base64,${base64Img}`;
  }

  toggleFavorite(post: PostDTO | null): void {
    if (post) {
      const favorisPost: Post = {
        id: post.id,
        name: post.name,
        content: post.content,
        text: post.text,
        postedBy: post.postedBy,
        date: new Date(post.date),
        img: post.img,
        processedImg: this.processImage(post.img),
        type: '',
        categoryId: 0,
        picPath: '',
        typeName: '',
        byteImg: function (byteImg: any): unknown {
          throw new Error('Function not implemented.');
        },
        approved: false,
        posted: false,
        archived: false
      };
      this.favorisService.addFavorite(favorisPost);
      this.isFavorite = !this.isFavorite; // Toggle the favorite state
    }
  }

  private checkIfFavorite(postId: number) {
    this.favorisService.getFavorites().subscribe(favorites => {
      this.isFavorite = favorites.some(fav => fav.id === postId);
    });
  }
}
