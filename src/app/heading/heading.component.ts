import { Component, OnInit, Input } from '@angular/core';

type HeadingComponentTag = 'h1' | 'h2' | 'h3' | 'h4';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent implements OnInit {
  @Input() text = '';
  @Input() tag: HeadingComponentTag = 'h2';

  ngOnInit(): void {}
}
