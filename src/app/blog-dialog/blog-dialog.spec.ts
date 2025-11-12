import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDialog } from './blog-dialog';

describe('BlogDialog', () => {
  let component: BlogDialog;
  let fixture: ComponentFixture<BlogDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
