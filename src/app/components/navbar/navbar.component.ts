import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hbar-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor(
    private scroller: ViewportScroller
  ) { }

  ngOnInit() { }

  goToHome() {
    this.scroller.scrollToAnchor("home");
  }

  goToLitepaper() {
    this.scroller.scrollToAnchor("litepaper");
  }

  goToRoadmap() {
    this.scroller.scrollToAnchor("roadmap");
  }

  goToCollection() {
    this.scroller.scrollToAnchor("collection");
  }

  goToAbout() {
    this.scroller.scrollToAnchor("about");
  }

  goToFAQs() {
    this.scroller.scrollToAnchor("faqs");
  }

  goToLinks() {
    this.scroller.scrollToAnchor("links");
  }
}
