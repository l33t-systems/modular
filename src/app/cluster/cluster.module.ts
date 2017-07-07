import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './node/node.component';
import { JobComponent } from './job/job.component';
import { MachineComponent } from './machine/machine.component';
import { DatabaseComponent } from './database/database.component';
import { QueueComponent } from './queue/queue.component';
import { WebComponent } from './web/web.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NodeComponent, JobComponent, MachineComponent, DatabaseComponent, QueueComponent, WebComponent]
})
export class ClusterModule { }
