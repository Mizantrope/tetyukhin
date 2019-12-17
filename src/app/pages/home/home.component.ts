import { Component } from '@angular/core';
import { default as homeTiles } from 'src/assets/settings/home-tiles.json';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public items = homeTiles;
    public view = 'home';
}
