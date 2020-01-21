import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-module/app-routing.module';
import { ErrorComponent } from './error/error.component';
import { SharedUtilsModule } from '../shared-utils/shared-utils.module';

@NgModule({
    declarations: [ErrorComponent],
    exports: [ErrorComponent],
    imports: [CommonModule, AppRoutingModule, SharedUtilsModule],
})
export class ComponentsModule {}
