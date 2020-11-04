import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMonitorPlatformSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [IMonitorPlatformSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent],
})
export class AuditsModule {}
