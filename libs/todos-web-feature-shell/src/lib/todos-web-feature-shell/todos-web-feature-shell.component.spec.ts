import { TestBed } from '@angular/core/testing';
import { TodosWebFeatureShellComponent } from './todos-web-feature-shell.component';

describe('TodosWebFeatureShellComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosWebFeatureShellComponent],
    }).compileComponents();
  });

  it('should render', () => {
    const fixture = TestBed.createComponent(TodosWebFeatureShellComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
