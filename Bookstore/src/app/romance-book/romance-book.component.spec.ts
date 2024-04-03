import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanceBookComponent } from './romance-book.component';

describe('RomanceBookComponent', () => {
  let component: RomanceBookComponent;
  let fixture: ComponentFixture<RomanceBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomanceBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RomanceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
