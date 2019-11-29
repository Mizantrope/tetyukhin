import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'rus-team',
                loadChildren: () => import('./pages/rus-team/rus-team.module').then(m => m.RusTeamModule)
            },
            {
                path: 'statistics',
                loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsModule)
            },
            {
                path: 'video-gallery',
                loadChildren: () => import('./pages/video-gallery/video-gallery.module').then(m => m.VideoGalleryModule)
            },
            {
                path: 'photo-gallery',
                loadChildren: () => import('./pages/photo-gallery/photo-gallery.module').then(m => m.PhotoGalleryModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
