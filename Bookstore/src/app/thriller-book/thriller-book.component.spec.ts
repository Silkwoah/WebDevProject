import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrillerBookComponent } from './thriller-book.component';

describe('ThrillerBookComponent', () => {
  let component: ThrillerBookComponent;
  let fixture: ComponentFixture<ThrillerBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThrillerBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThrillerBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
