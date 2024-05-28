import React from 'react';
import { StoryFn, Meta } from "@storybook/react";
import TabsItems, { TabsProps } from './TabsItems';

export default {
    title: "Components/TabsItems",
    component: TabsItems,
} as Meta<typeof TabsItems>;

const Template2: StoryFn<TabsProps> = (args) => <TabsItems {...args} />;

export const Tab2 = Template2.bind({});
Tab2.args = {
    label: "Label1",
    constrast: "dark",
    state: "default",
};
