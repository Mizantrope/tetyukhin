import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { default as nav } from 'src/assets/settings/nav.json';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    constructor(private router: Router, public translate: TranslateService) {
        this.currentLang = localStorage.getItem('currentLang');
        translate.addLangs(['ru', 'en', 'cn']);
        translate.setDefaultLang('ru');
        translate.use(this.currentLang);
        this.langs = translate.getLangs();
    }

    public currentLang: string;
    public langs;
    public navItems = nav;

    public setLang(lang: string) {
        localStorage.setItem('currentLang', lang);
        this.currentLang = localStorage.getItem('currentLang');
        this.translate.use(lang);
    }
}
