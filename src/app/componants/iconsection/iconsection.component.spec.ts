import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsectionComponent } from './iconsection.component';

describe('IconsectionComponent', () => {
  let component: IconsectionComponent;
  let fixture: ComponentFixture<IconsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
