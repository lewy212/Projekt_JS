import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {MatButtonModule} from "@angular/material/button";
import { UserRankDirectiveDirective } from './user-rank-directive.directive';


@NgModule({
    declarations: [
        AdminComponent,
        UserRankDirectiveDirective
    ],
    exports: [
        UserRankDirectiveDirective
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatButtonModule
    ]
})
export class AdminModule { }
