import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {UrlSerializer} from '@angular/router';
import {AppRoutingModule, TrailingSlashUrlSerializer} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageComponent} from '../views/page/page.component';
import {ServicesModule} from '../services/services.module';
import {AbstractPageService} from '../services/AbstractPageService';
import {PageMockService} from '../services/page-mock.service';
import {HttpErrorHandlerService} from '../services/http-error-handler.service';
import {ComponentsModule} from '../components/components.module';

@NgModule({
    declarations: [AppComponent, PageComponent],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserTransferStateModule,
        ServicesModule,
        ComponentsModule,
    ],
    providers: [
        HttpClient,
        HttpErrorHandlerService,
        {provide: AbstractPageService, useClass: PageMockService},
        {provide: HTTP_INTERCEPTORS, useExisting: HttpErrorHandlerService, multi: true},
        {provide: UrlSerializer, useClass: TrailingSlashUrlSerializer},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
