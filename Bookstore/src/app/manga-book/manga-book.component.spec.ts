import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaBookComponent } from './manga-book.component';

describe('MangaBookComponent', () => {
  let component: MangaBookComponent;
  let fixture: ComponentFixture<MangaBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangaBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MangaBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
