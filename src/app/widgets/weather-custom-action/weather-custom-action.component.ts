import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-weather-custom-action',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="onClick()">Reload & Copy</button>`,
  styles: [
  ]
})
export class WeatherCustomActionComponent {
  weatherWidget = inject(WeatherWidgetComponent);

  onClick() {
    this.weatherWidget.actions.reload();
    this.weatherWidget.actions.copyData();
  }
}
