import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarocComponent } from './maroc.component';

describe('MarocComponent', () => {
  let component: MarocComponent;
  let fixture: ComponentFixture<MarocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
