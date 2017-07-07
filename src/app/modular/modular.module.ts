import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssemblyComponent } from './assembly/assembly.component';
import { TemplateComponent } from './template/template.component';
import { InstanceComponent } from './instance/instance.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AssemblyComponent, TemplateComponent, InstanceComponent]
})
export class ModularModule {
  constructor(assemblyTemplate: TemplateComponent,
              templateTemplate: TemplateComponent) {}
}
