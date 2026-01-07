export type ButtonVariant = 'primary' | 'contact' | 'secondary' | 'submit';

interface BreakpointProps {
  width: string;
  height: string;
  padding: string;
}

export interface BaseButtonProps {
  title: string;
  variant: ButtonVariant;
  desktop: BreakpointProps;
}

export type PrimaryButton = BaseButtonProps & {
  variant: 'primary';
  borderRadius: string;
  mobile: BreakpointProps;
};

export type ContactButton = BaseButtonProps & {
  variant: 'contact';
  borderRadius: string;
};

export type SecondaryButton = BaseButtonProps & {
  variant: 'secondary';
  borderRadius: string;
  mobile: BreakpointProps;
};

export type SubmitButton = BaseButtonProps & {
  variant: 'submit';
  borderRadiusTR: string;
  borderRadiusBR: string;
  mobile: BreakpointProps;
};

export type AnyVariant = PrimaryButton | ContactButton | SecondaryButton | SubmitButton;
