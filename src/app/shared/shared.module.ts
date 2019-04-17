import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

export const PRIMENG_MODULE = [
  MenuModule,
];


@NgModule ({
  imports : [PRIMENG_MODULE, FormsModule, CommonModule],
  exports : [PRIMENG_MODULE, FormsModule, CommonModule],
  declarations : [],
  providers : [],
  bootstrap : [],
})

export class SharedModule {
}
