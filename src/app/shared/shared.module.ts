import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../pages/home/home.module';
import { ProfileModule } from '../pages/profile/profile.module';
import { PhotoGalleryModule } from '../pages/photo-gallery/photo-gallery.module';
import { VideoGalleryModule } from '../pages/video-gallery/video-gallery.module';
import { RusTeamModule } from '../pages/rus-team/rus-team.module';
import { StatisticsModule } from '../pages/statistics/statistics.module';
import { SimplebarAngularModule } from 'simplebar-angular';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HomeModule,
        ProfileModule,
        PhotoGalleryModule,
        VideoGalleryModule,
        RusTeamModule,
        StatisticsModule,
        SimplebarAngularModule
    ],
    exports: [SimplebarAngularModule]
})
export class SharedModule {}
