import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysteryBookComponent } from './mystery-book.component';

describe('MysteryBookComponent', () => {
  let component: MysteryBookComponent;
  let fixture: ComponentFixture<MysteryBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MysteryBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MysteryBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
