type ResponsiveSizes = {
  xs: string;
  md: string;
  lg: string;
  desktop: string;
};

export interface PageItemProps {
  pageItems: {
    id: number;
    src: string;
    result: string;
    type: string;
    company: string;
    product: string;
    platform: string;
    sizeWidth: ResponsiveSizes;
    sizeHeight: ResponsiveSizes;
  }[];
}
