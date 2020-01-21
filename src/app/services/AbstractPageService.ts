import { Observable } from 'rxjs';
import { Page } from '../../entities/page';

export abstract class AbstractPageService {
    abstract getPage(id: string): Observable<Page>;
    abstract getHomePage(): Observable<Page>;
}
