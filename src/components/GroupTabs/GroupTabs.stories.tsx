import React from 'react';
import { StoryFn, Meta } from "@storybook/react";
import GroupTabs, { TabsProps } from './GroupTabs';

export default {
    title: "Components/GroupTabs",
    component: GroupTabs,
} as Meta<typeof GroupTabs>;

const Template2: StoryFn<TabsProps> = (args) => <GroupTabs {...args} />;

export const Tab1 = Template2.bind({});
Tab1.args = {
    label: "label",
    constrast: "dark",
    state: "default",
};
