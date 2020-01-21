import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, UrlTree, DefaultUrlSerializer } from '@angular/router';

import { AppRouteResolverService } from './app-route-resolver.service';
import { PageComponent } from '../views/page/page.component';

@Injectable()
export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
    serialize(tree: UrlTree): any {
        const path = super.serialize(tree);
        const pathArr = path.split('?');
        pathArr[0] += pathArr[0].endsWith('/') ? '' : '/';
        return pathArr.join('?');
    }
}

const routes: Routes = [
    {
        path: 'hello-world',
        component: PageComponent,
    },
    {
        path: '',
        component: PageComponent,
        resolve: {
            resolver: AppRouteResolverService,
        },
    },
    {
        path: ':id',
        component: PageComponent,
        resolve: {
            resolver: AppRouteResolverService,
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule],
    providers: [AppRouteResolverService],
})
export class AppRoutingModule {}
