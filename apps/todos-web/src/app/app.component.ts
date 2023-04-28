import { Component } from '@angular/core';
import { TodosWebFeatureShellModule } from '@todos/todos-web-feature-shell';

@Component({
  standalone: true,
  imports: [TodosWebFeatureShellModule],
  selector: 'todos-web-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'todos-web';
}
