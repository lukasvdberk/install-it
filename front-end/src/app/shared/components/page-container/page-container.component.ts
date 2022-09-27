import { Component, OnInit } from '@angular/core';

/**
 * Page container to wrap around the page.
 * Centers the to a single box in the middle of the page and adds the background color.
 */
@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
