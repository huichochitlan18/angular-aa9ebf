import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  testasdf = 'asdfasdfafsd';
  ngOnInit() {}
  test(value: any) {
    console.log(value);
  }
}
