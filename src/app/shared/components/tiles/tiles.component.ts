import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tiles',
    templateUrl: './tiles.component.html',
    styleUrls: ['./tiles.component.scss']
})
export class TilesComponent {
    public switchVar = 10;
    @Input() items: [] = [];
    @Input() view: 'home' | 'achievements' | 'statistics' | 'gallery';
}
