import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGalleryRoutingModule } from './video-gallery-routing.module';
import { VideoGalleryComponent } from './video-gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [VideoGalleryComponent],
    imports: [CommonModule, VideoGalleryRoutingModule, SharedModule]
})
export class VideoGalleryModule {}
