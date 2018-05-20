import {Component} from '@angular/core';

@Component({
  selector: 'demo-modals',
  templateUrl: './modals.html',
})
export class DemoModals {

  opened: boolean = false;
  size: string = '';

  noHeader: boolean = false;
  hasTagline: boolean = false;
  noFooter: boolean = false;
  directional: boolean = false;

  open() {
    this.opened = !this.opened;
  }

  cancel() {
    this.opened = false;
  }
}