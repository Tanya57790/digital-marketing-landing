import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import TestimonialsSection from './TestimonialsSection';

const meta = {
  title: 'Components/TestimonialsSection/UI',
  component: TestimonialsSection,
} satisfies Meta<typeof TestimonialsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OnMobile: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
};

export const OnTablet: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
  },
};

export const OnTabletLarge: Story = {
  globals: {
    viewport: { value: 'tabletLarge', isRotated: false },
  },
};

export const OnDesktop: Story = {
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
};

export const OnDesktopLarge: Story = {
  globals: {
    viewport: { value: 'desktopLarge', isRotated: false },
  },
};
