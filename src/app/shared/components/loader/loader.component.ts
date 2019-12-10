import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
    public isLoading: Subject<boolean> = this.loaderService.isLoading;

    constructor(private readonly loaderService: LoaderService) {
        console.log(loaderService.isLoading);
        loaderService.hide();
        console.log(loaderService.isLoading);
    }
}
