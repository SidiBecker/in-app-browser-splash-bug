import { Component } from '@angular/core';
import {
  InAppBrowser,
  InAppBrowserOptions,
} from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  public times = 0;

  constructor(private inAppBrowser: InAppBrowser) {}

  test() {
    this.times++;
    this.inAppBrowser.create('https://google.com', '_system');
  }
}
