import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { PhotoGalleryComponent } from './photo-gallery.component';

@NgModule({
    declarations: [PhotoGalleryComponent],
    imports: [CommonModule, PhotoGalleryRoutingModule]
})
export class PhotoGalleryModule {}
