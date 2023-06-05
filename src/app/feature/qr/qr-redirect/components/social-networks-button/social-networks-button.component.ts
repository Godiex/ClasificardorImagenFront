import {Component, Input} from '@angular/core';
import {SocialNetworkUrls} from "../../shared/interfaces/qr-redirect-info";

@Component({
  selector: 'app-social-networks-button',
  templateUrl: './social-networks-button.component.html',
  styleUrls: ['./social-networks-button.component.scss']
})
export class SocialNetworksButtonComponent {
  @Input() socialsNetworkUrls: SocialNetworkUrls;

  constructor() {
    this.socialsNetworkUrls = { instagram : '', facebook:'', whatsapp: ''};
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
