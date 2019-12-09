import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { default as nav } from 'src/assets/nav.json';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    public currentLang: string;
    public navItems = nav;
    public langs;
    constructor(public translate: TranslateService) {
        this.currentLang = localStorage.getItem('currentLang');
        translate.addLangs(['ru', 'en', 'cn']);
        translate.setDefaultLang('ru');
        translate.use(this.currentLang);
        this.langs = translate.getLangs();
    }

    public setLang(lang: string) {
        localStorage.setItem('currentLang', lang);
        this.currentLang = localStorage.getItem('currentLang');
        this.translate.use(lang);
    }
}
