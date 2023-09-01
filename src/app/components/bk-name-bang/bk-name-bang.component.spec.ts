import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkNameBangComponent } from './bk-name-bang.component';

describe('BkNameBangComponent', () => {
  let component: BkNameBangComponent;
  let fixture: ComponentFixture<BkNameBangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BkNameBangComponent]
    });
    fixture = TestBed.createComponent(BkNameBangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
