import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RusTeamRoutingModule } from './rus-team-routing.module';
import { RusTeamComponent } from './rus-team.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [RusTeamComponent],
    imports: [CommonModule, RusTeamRoutingModule, SharedModule]
})
export class RusTeamModule {}
