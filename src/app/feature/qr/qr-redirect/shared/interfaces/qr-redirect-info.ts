export interface SocialNetworkUrls {
  instagram: string;
  facebook: string;
  whatsapp: string;
}

export interface QrRedirectInfo{
  data: any;
  stylesTemplate: { h2: { property : 'custom-property'}, th: { property : 'custom-property'} };
  customerName: string;
  description: string;
  imageLinkTitle: string;
  imageLinkInfo: string;
  socialsNetworkUrls: SocialNetworkUrls;
}

export interface Response{
  score: number[];
  predictedLabelValue: string;
}
