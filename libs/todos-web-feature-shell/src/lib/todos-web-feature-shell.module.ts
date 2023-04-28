import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosWebFeatureShellComponent } from './todos-web-feature-shell/todos-web-feature-shell.component';

export const todosWebFeatureShellRoutes: Routes = [];

@NgModule({
  declarations: [TodosWebFeatureShellComponent],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(todosWebFeatureShellRoutes)],
})
export class TodosWebFeatureShellModule {}
