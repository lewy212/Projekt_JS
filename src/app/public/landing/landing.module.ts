import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    LandingComponent
  ],
  exports:[LandingComponent],
    imports: [
        CommonModule, RouterModule, MatButtonModule
    ]
})
export class LandingModule { }
