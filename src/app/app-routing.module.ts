import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarocComponent } from './auth-components/maroc/maroc.component';
import { AfriqueComponent } from './auth-components/afrique/afrique.component';
import { EuropeComponent } from './auth-components/europe/europe.component';
import { AsieComponent } from './auth-components/asie/asie.component';
import { AmeriqueComponent } from './auth-components/amerique/amerique.component';
import { LatestComponent } from './auth-components/latest/latest.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { FirstComponent } from './auth-components/first/first.component';
import { TrendComponent } from './auth-components/trend/trend.component';
import { ReportsComponent } from './auth-components/reports/reports.component';
import { MainComponent } from './auth-components/main/main.component';
import { FavorisComponent } from './auth-components/favoris/favoris.component';

const routes: Routes = [
  {path:'',component:MarocComponent},

  {path:'maroc',component:MarocComponent},
  {path:'afrique',component:AfriqueComponent},
  {path:'europe',component:EuropeComponent},
  {path:'asie',component:AsieComponent},
  {path:'amerique',component:AmeriqueComponent},
  {path:'latest',component:LatestComponent},
  {path:'first',component:FirstComponent},
  {path:'trend',component:TrendComponent},
  {path:'reports',component:ReportsComponent},
  {path:'main',component:MainComponent},
  {path:'favoris',component:FavorisComponent},







  { path: 'post/:id', component: PostDetailComponent },  // Route pour les détails du post



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
