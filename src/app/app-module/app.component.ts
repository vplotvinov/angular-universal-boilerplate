import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorHandlerService} from '../services/http-error-handler.service';
import {AbstractPageService} from '../services/AbstractPageService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    error: Error = null;

    constructor(
        private errorService: HttpErrorHandlerService,
        private changeDetectionRef: ChangeDetectorRef,
        private postService: AbstractPageService,
        private router: Router,
        @Inject(PLATFORM_ID) private platformId
    ) {
    }

    ngOnInit(): void {
        this.errorService.onError$.subscribe((error) => {
            this.error = error;
            this.changeDetectionRef.detectChanges();
        });
    }

    onErrorDismiss(): void {
        this.error = null;
        this.router.navigateByUrl('/');
    }
}
