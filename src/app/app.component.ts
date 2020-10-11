import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'moscow-map';
  showFirstScreen: boolean = true

  ngAfterViewInit() {
    setTimeout(() => {
      this.showFirstScreen = false
    }, 1000)
  }
}
