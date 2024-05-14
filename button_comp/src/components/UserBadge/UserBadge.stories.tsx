import React from 'react';
import {StoryFn, Meta} from "@storybook/react";
import UserBadge from './UserBadge';

export default {
    title: "ReactComponentLibrary/UserBadge",
    component: UserBadge,
} as Meta<typeof UserBadge>;

const Template1: StoryFn<typeof UserBadge> = (args) => <UserBadge {...args} />;

export const StatusBadgeXD = Template1.bind({});
StatusBadgeXD.args = {
    label: "Baldmon",
    constrast: "dark",
    state: "default",
};