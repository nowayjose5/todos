import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'todos-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
