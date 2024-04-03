import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceFictionBookComponent } from './science-fiction-book.component';

describe('ScienceFictionBookComponent', () => {
  let component: ScienceFictionBookComponent;
  let fixture: ComponentFixture<ScienceFictionBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScienceFictionBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScienceFictionBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
