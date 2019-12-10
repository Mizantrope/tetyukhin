import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagePipe } from './pipes/image.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
    declarations: [ImagePipe, LoaderComponent],
    imports: [CommonModule],
    exports: [ImagePipe, LoaderComponent],
    providers: [ImagePipe]
})
export class SharedModule {}
