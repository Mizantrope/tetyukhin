import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagePipe } from './pipes/image.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [ImagePipe, LoaderComponent, TilesComponent],
    imports: [CommonModule, TranslateModule],
    exports: [ImagePipe, LoaderComponent, TilesComponent, TranslateModule],
    providers: [ImagePipe]
})
export class SharedModule {}
