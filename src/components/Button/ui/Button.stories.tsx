import type { Meta, ReactRenderer } from '@storybook/nextjs-vite';
import { ButtonVariant } from './interfaces';
import Button from './Button';
import { StoryAnnotations } from 'storybook/internal/types';

const meta = {
  title: 'Components/Button/UI',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      canvas: {
        layout: 'centered',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const OnMobile: StoryAnnotations<
  ReactRenderer,
  {
    variantButton: ButtonVariant;
    size: 'small' | 'large';
  }
> = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
  args: {
    variantButton: 'primary',
    size: 'small',
  },
};

export const OnDesktopLarge: StoryAnnotations<
  ReactRenderer,
  {
    variantButton: ButtonVariant;
    size: 'small' | 'large';
  }
> = {
  globals: {
    viewport: { value: 'desktopLarge', isRotated: false },
  },
  args: {
    variantButton: 'primary',
    size: 'large',
  },
};
