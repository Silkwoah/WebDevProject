import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyBookComponent } from './fantasy-book.component';

describe('FantasyBookComponent', () => {
  let component: FantasyBookComponent;
  let fixture: ComponentFixture<FantasyBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FantasyBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FantasyBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
