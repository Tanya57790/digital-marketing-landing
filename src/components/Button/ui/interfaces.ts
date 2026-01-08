interface BreakpointProps {
  width: string;
  height: string;
  fontSize: string;
}

export type ButtonVariant = 'primary' | 'contact' | 'secondary' | 'submit';

export type BaseButtonProps = {
  variant: ButtonVariant;
  title: string;
  borderRadius: string;
  mobile: BreakpointProps;
  desktop: BreakpointProps;
};
