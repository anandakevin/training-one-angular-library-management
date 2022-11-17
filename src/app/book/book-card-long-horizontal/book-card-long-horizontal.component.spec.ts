import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardLongHorizontalComponent } from './book-card-long-horizontal.component';

describe('BookCardLongHorizontalComponent', () => {
  let component: BookCardLongHorizontalComponent;
  let fixture: ComponentFixture<BookCardLongHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCardLongHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardLongHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
