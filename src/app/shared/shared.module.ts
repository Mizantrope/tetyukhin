import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagePipe } from './pipes/image.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { TilesComponent } from './components/tiles/tiles.component';

@NgModule({
    declarations: [ImagePipe, LoaderComponent, TilesComponent],
    imports: [CommonModule],
    exports: [ImagePipe, LoaderComponent, TilesComponent],
    providers: [ImagePipe]
})
export class SharedModule {}
