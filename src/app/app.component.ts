import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public currentLang: string;
    constructor(public translate: TranslateService) {
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('en');
        this.currentLang = localStorage.getItem('currentLang');

        translate.use(this.currentLang);
    }

    public setLang(lang: string) {
        localStorage.setItem('currentLang', lang);
    }
}
