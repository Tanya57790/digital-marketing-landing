export type CardVariant = {
  variantCard: 'support' | 'features' | 'subscribe';
};

type SliceIndex = {
  start: number;
  end: number;
};

export type ResponsiveWidth = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  desktop: string;
};

interface StylesProps {
  title: string;
  firstPartSlice: SliceIndex;
  lastPartSlice?: SliceIndex;
  responsiveWidth: ResponsiveWidth;
  subtitle?: string;
  accentIndex: number;
}

export interface CardTitleProps {
  support: StylesProps;
  features: StylesProps;
  subscribe: StylesProps;
}
