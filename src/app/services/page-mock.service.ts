import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractPageService } from './AbstractPageService';
import { HOME_MOCK } from './mock_data/home_mock';
import { PAGE_MOCK } from './mock_data/page_mock';
import { Page } from '../../entities/page';

@Injectable()
export class PageMockService implements AbstractPageService {
    readonly home = HOME_MOCK;
    readonly page = PAGE_MOCK;

    getHomePage(): Observable<Page> {
        return of(this.home);
    }

    getPage(id: string): Observable<Page> {
        return of(this.page);
    }
}
