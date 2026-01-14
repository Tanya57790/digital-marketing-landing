import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import TrustedBySection from './TrustedBySection';

const meta = {
  title: 'Components/TrustedBySection/UI',
  component: TrustedBySection,
} satisfies Meta<typeof TrustedBySection>;

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

export const OnDesktopLarge: Story = {
  globals: {
    viewport: { value: 'desktopLarge', isRotated: false },
  },
};
