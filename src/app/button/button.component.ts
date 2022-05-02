import { Component, OnInit, Input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label = '';
  @Input() variant: ButtonVariant = 'secondary';

  ngOnInit(): void {}
}
