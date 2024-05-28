import { Preview } from '@storybook/react';
import { fn } from '@storybook/test';

const preview: Preview = {
  parameters: {
    actions: {
      // Remove argTypesRegex
      // argTypesRegex: "^on[A-Z].*"
      // Explicitly assign actions using fn function
      handles: [
        'onClick', fn(),
        'onChange', fn(),
        'onSubmit', fn(),
        // Add other event handlers as needed
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
