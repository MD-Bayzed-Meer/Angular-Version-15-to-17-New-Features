import { Routes } from '@angular/router';
import { Angular15Component } from './angular15/angular15.component';
import { Angular16Component } from './angular16/angular16.component';
import { Angular17Component } from './angular17/angular17.component';
import { StandAloneComponent } from './angular15/stand-alone/stand-alone.component';
import { NgOptimizedImageComponent } from './angular15/ng-optimized-image/ng-optimized-image.component';
import { CdkListBoxComponent } from './angular15/cdk-list-box/cdk-list-box.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular15',
    pathMatch: 'full'
  },
  {
    path: 'angular15',
    component: Angular15Component,
    children: [
      {
        path: 'stand-alone',
        component: StandAloneComponent
      },
      {
        path: 'image-directive',
        component: NgOptimizedImageComponent
      },
      {
        path: 'cdkList',
        component: CdkListBoxComponent
      }
    ]
  },
  {
    path: 'angular16',
    component: Angular16Component
  },
  {
    path: 'angular17',
    component: Angular17Component
  }
];
