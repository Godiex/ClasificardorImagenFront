import {Component, Input} from '@angular/core';
import {QrRedirectInfo} from "../../shared/interfaces/qr-redirect-info";

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent {
  @Input() infoRedirect: QrRedirectInfo = {
    stylesTemplate: {
      th: {
        property: 'custom-property'
      }
    }
  }  as QrRedirectInfo;

  public getObjectEntries(obj: any): { key: string, value: any }[] {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
  }
}
