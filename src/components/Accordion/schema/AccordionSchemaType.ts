type ContentURLs = {
  main?: string;
  readMore?: string;
  readCaseStudy?: string;
};

interface AccordionContent {
  title: string;
  body: string;
  urls: ContentURLs;
}

interface AccordionSection {
  title: string;
  subtitle?: string;
  color: string;
  sectionColor?: string;
  content: AccordionContent;
  sections?: AccordionSection[];
  columns?: number;
  open?: boolean;
  fullWidth?: boolean;
}

export interface AccordionType {
  open?: boolean;
  title: string;
  content: AccordionSection[];
}
