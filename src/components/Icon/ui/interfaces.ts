type LoadingProps = 'eager' | 'lazy';

export interface SizeProps {
  width: string;
  height: string;
}

export interface HeroProps {
  id: number;
  name: string;
  src: string;
  loading: LoadingProps;
  mobile: SizeProps;
  tablet: SizeProps;
  laptop: SizeProps;
  desktop: SizeProps;
}

export interface FooterProps {
  id: number;
  name: string;
  src: string;
  loading: LoadingProps;
  size: string;
}
