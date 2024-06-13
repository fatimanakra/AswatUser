import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSidenavContainer} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatDivider, MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {  HttpClientModule } from '@angular/common/http';
import { MarocComponent } from './auth-components/maroc/maroc.component';
import { RouterModule } from '@angular/router';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, _MatInternalFormField } from '@angular/material/core';
import { FavorisComponent } from './auth-components/favoris/favoris.component';
@NgModule({
  declarations: [
    AppComponent,
    MarocComponent,
    AfriqueComponent,
    EuropeComponent,
    AsieComponent,
    AmeriqueComponent,LatestComponent, PostDetailComponent,FirstComponent,TrendComponent,ReportsComponent,
    MainComponent,
    FavorisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatToolbarModule,
     MatIconModule,
     MatSidenavContainer,
     MatSidenavModule,    MatFormFieldModule,    MatDividerModule


     
     ,MatDivider,CommonModule, RouterModule, BrowserModule,
     HttpClientModule,MatCardModule,    FormsModule,
     ReactiveFormsModule, MatIconModule,    MatCardModule,  BrowserModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,MatFormFieldModule
    
    
    
    




    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
