import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {Page} from '../../../entities/page';
import {AbstractPageService} from '../../services/AbstractPageService';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
    isLoading = false;
    page: Page;
    error: Error;

    constructor(
        private pageService: AbstractPageService,
        private route: ActivatedRoute,
        private router: Router,
        private title: Title,
        @Inject(PLATFORM_ID) private platformId
    ) {
    }

    processPageResponse = (data) => {
        this.error = null;
        this.page = data;
        this.title.setTitle(this.page.seo_meta.seo_title);
        this.isLoading = false;
    };

    ngOnInit(): void {
        this.route.paramMap.subscribe((map) => {
            const id = map.get('id');
            this.isLoading = true;

            if (id) {
                this.pageService.getPage(id).subscribe(this.processPageResponse);
            } else {
                this.pageService.getHomePage().subscribe(this.processPageResponse);
            }
        });
    }
}
