import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCategoryComponent } from './search-by-category.component';

describe('SearchByCategoryComponent', () => {
  let component: SearchByCategoryComponent;
  let fixture: ComponentFixture<SearchByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
