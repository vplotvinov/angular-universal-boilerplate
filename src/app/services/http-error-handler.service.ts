import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpErrorHandlerService implements HttpInterceptor {
    private onErrorSource = new Subject<Error>();

    public get onError$(): Observable<Error> {
        return this.onErrorSource.asObservable();
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap(() => {}, this.handleError.bind(this)));
    }

    handleError(error: any): void {
        error instanceof HttpErrorResponse && this.onErrorSource.next(error);
    }
}
