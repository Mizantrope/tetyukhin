import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { default as nav} from 'src/assets/nav.json';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    public currentLang: string;
    public navItems = nav;
    constructor(public translate: TranslateService) {
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('ru');
        this.currentLang = localStorage.getItem('currentLang');
        translate.use(this.currentLang);
    }

    public setLang(lang: string) {
        localStorage.setItem('currentLang', lang);
        this.translate.use(lang);
    }
}
