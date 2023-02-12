import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoDiaNocheComponent } from './modo-dia-noche.component';

describe('ModoDiaNocheComponent', () => {
  let component: ModoDiaNocheComponent;
  let fixture: ComponentFixture<ModoDiaNocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoDiaNocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModoDiaNocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
