export interface RestfulAEMComponent {
  aemComponentId: string;
  aemComponentType: string;
}

export enum RestfulAEMPlatform {
  all = "all",
  app = "app",
  web = "web",
}

export enum RestfulAEMAlignment {
  left = "left",
  center = "center",
  right = "right",
}

export interface RestfulAEMContainer extends RestfulAEMComponent {
  aemComponentType: "theclub-spa-react/components/container";
  items: RestfulWidgetComponent[];
  panelTitle: string;
  alignment: RestfulAEMAlignment;
}

export interface RestfulAEMAccordion extends RestfulAEMComponent {
  aemComponentType: "theclub-spa-react/components/accordion";
  platform: RestfulAEMPlatform;
  expandButtonLabel: string;
  collapseButtonLabel: string;
  items: RestfulAEMContainer[];
}

export type RestfulWidgetComponent = RestfulAEMAccordion | RestfulAEMContainer;
