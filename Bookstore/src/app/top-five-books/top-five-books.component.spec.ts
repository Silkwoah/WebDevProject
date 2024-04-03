import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveBooksComponent } from './top-five-books.component';

describe('TopFiveBooksComponent', () => {
  let component: TopFiveBooksComponent;
  let fixture: ComponentFixture<TopFiveBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopFiveBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopFiveBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
