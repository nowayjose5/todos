import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: async () =>
      (await import('@todos/todos-web/shell')).shellRoutes,
  },
];
