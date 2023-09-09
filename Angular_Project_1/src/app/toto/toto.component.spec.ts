import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotoComponent } from './toto.component';

describe('TotoComponent', () => {
  let component: TotoComponent;
  let fixture: ComponentFixture<TotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotoComponent]
    });
    fixture = TestBed.createComponent(TotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
