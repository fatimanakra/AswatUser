import { Component, OnDestroy, OnInit } from '@angular/core';
import { FavorisService } from './favoris-services/favoris.service';
import { Subscription } from 'rxjs';
import { PostDetailService } from '../post-detail/post-detail-services/post-detail.service';
import { Post } from '../../post.models';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrl: './favoris.component.css'
})
export class FavorisComponent implements OnInit {
  favoris: Post[] = [];
post: any;

  constructor(private favorisService: FavorisService) {}

  ngOnInit() {
    this.favorisService.getFavorites().subscribe((favoris) => {
      this.favoris = favoris;
    });
  }
}