type CardVariant = 'support' | 'features' | 'subscribe';

export interface CardVariantProps {
  variantCard: CardVariant;
}

type SliceRange = { start: number; end: number };

type ResponsiveValue = Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'desktop', string>>;

export interface ResponsiveProps {
  responsiveWidth: ResponsiveValue;
}

interface TitleSection {
  title: string;
  firstPartSlice: SliceRange;
  lastPartSlice?: SliceRange;
  responsiveWidth: ResponsiveValue;
  subtitle?: string;
  accentIndex: number;
}

export type CardConfigTitle = Record<CardVariant, TitleSection>;

export interface CardTextProps {
  id?: number;
  accent: string;
  firstPart?: string[];
  lastPart?: string[];
}

export interface CardStylesProps {
  display: string;
  justifyContent: ResponsiveValue;
  flexDirection: ResponsiveValue;
  whiteSpace: ResponsiveValue;
  textWidth?: ResponsiveValue;
  listWidth?: ResponsiveValue;
  textDirection?: ResponsiveValue;
  listDirection?: ResponsiveValue;
  paddingTopText?: ResponsiveValue;
  gap?: ResponsiveValue;
}

export type CardsConfig = Record<CardVariant, CardStylesProps>;
