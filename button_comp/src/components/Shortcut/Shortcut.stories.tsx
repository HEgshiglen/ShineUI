import React from 'react';
import {StoryFn, Meta} from "@storybook/react";
import Shortcut from './Shortcut';

export default {
    title: "ReactComponentLibrary/Shortcut",
    component: Shortcut,
} as Meta<typeof Shortcut>;

const Template1: StoryFn<typeof Shortcut> = (args) => <Shortcut {...args} />;

export const Shortcuter = Template1.bind({});
Shortcuter.args = {
    label: "Undo",
    constrast: "dark",
    keystrokes: "\ + /",
};