import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

    constructor() {
    }

    @Input()
    error: Error;

    @Output()
    onDismiss: EventEmitter<void> = new EventEmitter();

    ngOnInit(): void {
    }
}
