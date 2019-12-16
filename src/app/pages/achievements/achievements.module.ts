import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsComponent } from './achievements.component';
import { AchievementsRoutingModule } from './achievements-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [AchievementsComponent],
    imports: [CommonModule, AchievementsRoutingModule, SharedModule]
})
export class AchievementsModule {}
