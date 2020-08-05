import {Component, OnInit, ViewChild} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss'],
  providers: [NgbCarouselConfig]
})
export class Dashboard1Component implements OnInit {
  @ViewChild('carousel') carousel: any;
  images: any;
  constructor(config: NgbCarouselConfig) {
    this.images = ['../../../assets/img/capgemini-logo.jpg', '../../../assets/img/capgemini-carousel.jpg', '../../../assets/img/capgemini-carousel-2.jpg'];
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() {}
}
