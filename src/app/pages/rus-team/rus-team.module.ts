import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RusTeamRoutingModule } from './rus-team-routing.module';
import { RusTeamComponent } from './rus-team.component';

@NgModule({
    declarations: [RusTeamComponent],
    imports: [CommonModule, RusTeamRoutingModule]
})
export class RusTeamModule {}
