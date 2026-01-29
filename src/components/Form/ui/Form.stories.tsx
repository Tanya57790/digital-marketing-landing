import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { within, expect, userEvent } from '@storybook/test';

import Form from './Form';

const meta = {
  title: 'Components/Form/UI',
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SubmitSuccess: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Enter success email', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'test@gmail.com');
    });
    await step('Submit', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await expect(canvas.getByRole('button')).toBeDisabled();
    });
  },
};

export const InvalidForm: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Enter invalid email', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'testgmailcom');
    });
    await step('Submit shows error', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
  },
};

export const EmptyForm: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Enter empty area', async () => {
      await userEvent.type(canvas.getByRole('textbox'), ' ');
    });
    await step('Submit shows error', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
  },
};

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
