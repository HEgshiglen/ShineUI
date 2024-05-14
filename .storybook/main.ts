import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../button_comp/src/components/Badge/Badge.stories.tsx",
    "../button_comp/src/components/Button/Button.stories.tsx",
    "../button_comp/src/components/StatusBadge/StatusBadge.stories.tsx",
    "../button_comp/src/components/UserBadge/UserBadge.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
