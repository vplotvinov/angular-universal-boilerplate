import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractPageService } from '../services/AbstractPageService';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AppRouteResolverService implements Resolve<any> {
    constructor(private postService: AbstractPageService, @Inject(PLATFORM_ID) private platformId) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        if (isPlatformBrowser(this.platformId)) {
            const pageId = route.params['id'];
            return pageId ? this.postService.getPage(pageId) : this.postService.getHomePage();
        }

        return true;
    }
}
