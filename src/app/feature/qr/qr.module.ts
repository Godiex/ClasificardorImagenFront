import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrRoutingModule } from './qr-routing.module';
import { QrRedirectComponent } from './qr-redirect/qr-redirect.component';
import { CompanyTitleComponent } from './qr-redirect/components/company-title/company-title.component';
import { CompanyInfoComponent } from './qr-redirect/components/company-info/company-info.component';
import { SharedModule } from "../../shared/shared.module";
import { SocialNetworksButtonComponent } from './qr-redirect/components/social-networks-button/social-networks-button.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { ReactiveFormsModule } from '@angular/forms';
import {NgxFileDropModule} from "ngx-file-drop";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    QrRedirectComponent,
    CompanyTitleComponent,
    CompanyInfoComponent,
    SocialNetworksButtonComponent
  ],
  imports: [
    CommonModule,
    QrRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class QrModule { }
