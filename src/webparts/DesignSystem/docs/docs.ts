import cardDocs from "./cardDocs";
import sitePickerDocs from "./sitePickerDocs";

export interface ComponentDemo {
  title: string;
  slug: string;
  description: string | JSX.Element;
  code: string;
  scope: any;
}

export interface ComponentDocumentation {
  title: string;
  id: string;
  description: string | JSX.Element;
  demos: ComponentDemo[];
}

let components: ComponentDocumentation[] = [cardDocs, sitePickerDocs];

export default components.sort((a, b) => (a.title < b.title ? -1 : 1));
