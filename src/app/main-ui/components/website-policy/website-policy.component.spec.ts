import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitePolicyComponent } from './website-policy.component';

describe('WebsitePolicyComponent', () => {
  let component: WebsitePolicyComponent;
  let fixture: ComponentFixture<WebsitePolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsitePolicyComponent]
    });
    fixture = TestBed.createComponent(WebsitePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
