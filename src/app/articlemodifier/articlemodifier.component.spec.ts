import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlemodifierComponent } from './articlemodifier.component';

describe('ArticlemodifierComponent', () => {
  let component: ArticlemodifierComponent;
  let fixture: ComponentFixture<ArticlemodifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlemodifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlemodifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
