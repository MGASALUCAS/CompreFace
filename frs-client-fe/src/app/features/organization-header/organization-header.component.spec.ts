import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationHeaderComponent } from './organization-header.component';
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {EntityTitleModule} from "../entity-title/entity-title.module";
import {Subject} from "rxjs";
import {OrganizationHeaderService} from "./organization-header.service";

describe('OrganizationHeaderComponent', () => {
  let component: OrganizationHeaderComponent;
  let fixture: ComponentFixture<OrganizationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationHeaderComponent ],
      providers: [
        {
          provide: OrganizationHeaderService,
          useValue: {
            select: () => {},
            rename: () => {},
            organization$: new Subject(),
            userRole$: new Subject(),
            selectedId$: new Subject(),
          }
        },
      ],
      imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        EntityTitleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
