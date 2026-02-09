import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SubscriptionSection from './SubscriptionSection';

const meta = {
  title: 'Components/SubscriptionSection/UI',
  component: SubscriptionSection,
} satisfies Meta<typeof SubscriptionSection>;

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
