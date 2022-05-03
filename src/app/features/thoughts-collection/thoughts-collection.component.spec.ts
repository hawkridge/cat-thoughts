import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtsCollectionComponent } from './thoughts-collection.component';

describe('ThoughtsCollectionComponent', () => {
  let component: ThoughtsCollectionComponent;
  let fixture: ComponentFixture<ThoughtsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoughtsCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
