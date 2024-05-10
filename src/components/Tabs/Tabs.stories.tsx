import React from 'react';
import { StoryFn, Meta } from "@storybook/react";
import Tabs, { TabsProps } from './Tabs';

export default {
    title: "ReactComponentLibrary/Tabs",
    component: Tabs,
} as Meta<typeof Tabs>;

const Template2: StoryFn<TabsProps> = (args) => <Tabs {...args} />;

export const Tab = Template2.bind({});
Tab.args = {
    label: "hola",
    constrast: "dark",
    state: "default",
};
