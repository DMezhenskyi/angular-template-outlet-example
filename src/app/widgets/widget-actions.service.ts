import { inject, Injectable } from '@angular/core';
import { WidgetState } from './widget-state.service';

@Injectable()
export class WidgetActions {
  
  state = inject(WidgetState, { self: true });

  reload() {
    this.state.lastUpdateAt = new Date();
    console.log('Reloads widget data...');
  }
  copyData() {
    console.log('Copy widget data into clipboard...');
  }
}
