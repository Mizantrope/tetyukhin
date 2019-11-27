import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RusTeamComponent } from './rus-team.component';

const routes: Routes = [{ path: '', component: RusTeamComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RusTeamRoutingModule {}
