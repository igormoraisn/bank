import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-product',
  template: ''
})
export class UtilComponent implements OnInit {
  public static pageRefresh() {
    location.reload();
  }
  ngOnInit() {
  }
}
