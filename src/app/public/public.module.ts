import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import {LandingModule} from "./landing/landing.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    PublicComponent
  ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        LandingModule,
        MatButtonModule
    ]
})
export class PublicModule { }
