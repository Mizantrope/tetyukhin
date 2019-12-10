import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { AchievementsModule } from './pages/achievements/achievements.module';
import { HomeModule } from './pages/home/home.module';
import { ProfileModule } from './pages/profile/profile.module';
import { PhotoGalleryModule } from './pages/photo-gallery/photo-gallery.module';
import { VideoGalleryModule } from './pages/video-gallery/video-gallery.module';
import { RusTeamModule } from './pages/rus-team/rus-team.module';
import { StatisticsModule } from './pages/statistics/statistics.module';
import { LoaderInterceptorService } from './shared/interceptors/loader.interceptor';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

@NgModule({
    declarations: [AppComponent, LayoutComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HomeModule,
        ProfileModule,
        AchievementsModule,
        PhotoGalleryModule,
        VideoGalleryModule,
        RusTeamModule,
        StatisticsModule,
        SimplebarAngularModule,
        SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptorService,
            multi: true
        }
    ],
    exports: [HomeModule],
    bootstrap: [AppComponent]
})
export class AppModule {
    public currentLang: string;
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
