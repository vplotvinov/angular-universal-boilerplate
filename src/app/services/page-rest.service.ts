import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AbstractPageService } from './AbstractPageService';
import { environment } from '../../environments/environment';
import { Page } from '../../entities/page';

@Injectable()
export class PageRestService implements AbstractPageService {
    private _srvUrl = environment.ajaxUrl;
    readonly POST_KEY_PREFIX = 'POST_';
    readonly HOME_PAGE_ID = 'home';

    constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId, private state: TransferState) {}

    getPage(id: string): Observable<Page> {
        return undefined;
    }

    getHomePage(): Observable<Page> {
        const post = this.state.get<Page>(makeStateKey(`${this.POST_KEY_PREFIX}_${this.HOME_PAGE_ID}`), null);
        return post ? of(post) : this._getHomePageFromHttp();
    }

    _getHomePageFromHttp(): Observable<Page> {
        return this.http
            .get<Page>(this._srvUrl + `/${this.HOME_PAGE_ID}/`)
            .pipe(
                tap((item) =>
                    this.state.set(makeStateKey<Page>(`${this.POST_KEY_PREFIX}_${this.HOME_PAGE_ID}`), item)
                )
            );
    }
}
