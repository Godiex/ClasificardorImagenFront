import {Component, Input} from '@angular/core';
import {QrRedirectInfo} from "../../shared/interfaces/qr-redirect-info";

@Component({
  selector: 'app-company-title',
  templateUrl: './company-title.component.html',
  styleUrls: ['./company-title.component.scss']
})
export class CompanyTitleComponent {
  @Input() infoRedirect: QrRedirectInfo = {
    stylesTemplate: {
      h2: {
        property: 'custom-property'
      }
    }
  }  as QrRedirectInfo;

  constructor() {
  }
}
