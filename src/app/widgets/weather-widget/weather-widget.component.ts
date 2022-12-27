import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, Injector, Input, TemplateRef } from '@angular/core';
import { WidgetActions } from '../widget-actions.service';
import { WidgetState } from '../widget-state.service';

@Component({
  selector: 'weather-widget',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <div class="widget-header">
      <ng-container [ngTemplateOutlet]="headerTemplate || defaultWidgetHeader"></ng-container>
      <ng-template #defaultWidgetHeader>
        <div class="widget-title">Weather Forecast</div>
        <div class="widget-sub-title">Current weather in your location</div>
      </ng-template>
    </div>
    <div class="widget-content">
      <ng-container
        [ngTemplateOutlet]="contentTemplate || defaultWidgetContent"
        [ngTemplateOutletContext]="{ $implicit: state }"></ng-container>
      <ng-template #defaultWidgetContent>
        <div class="sky-condition">{{ state.data.skyCondition === 'sunny' ? '☀️' : '☁️' }}</div>
        <div class="temperature">{{state.data.temperature}}°C</div>
      </ng-template>
    </div>
    <div class="widget-actions">
      <ng-container
        [ngTemplateOutlet]="actionTemplate || defaultWidgetAction"
        [ngTemplateOutletInjector]="injector"></ng-container>
      <ng-template #defaultWidgetAction>
        <button (click)="actions.reload()">Reload</button>
        <button (click)="actions.copyData()">Copy Info</button>
      </ng-template>
    </div>
  `,
  styleUrls: ['./weather-widget.component.css'],
  providers: [WidgetActions, WidgetState]
})
export class WeatherWidgetComponent {
  @Input()
  headerTemplate!: TemplateRef<any>;

  @Input()
  actionTemplate!: TemplateRef<any>;

  @Input()
  contentTemplate!: TemplateRef<{ $implicit: WidgetState }>;

  state = inject(WidgetState);
  actions = inject(WidgetActions);
  injector = inject(Injector);
}
