import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{BreakpointObserver} from '@angular/cdk/layout';

import { AfterViewInit, ChangeDetectorRef, Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'user';
  @ViewChild(MatSidenav) sideNav!:MatSidenav;
sources: any;
constructor(private observer: BreakpointObserver,private cdr: ChangeDetectorRef ){}

  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:787px'])
    .subscribe((res)=>{
     if(res?.matches){
       this.sideNav.mode = "over";
       this.sideNav.close();
     }else {
       this.sideNav.mode = "side";
       this.sideNav.open();
     }
    });
    this.cdr.detectChanges();
 }
}
