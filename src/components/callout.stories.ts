import type { Meta, StoryObj } from '@storybook/html';
import './callout'
const meta: Meta = {
  component: 'wc-callout',
};
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Info: Story = {
    render: (args) => {
        const el = document.createElement('wc-callout');
        el.setAttribute('type', 'info');
        el.innerHTML = "<p>This is the inner text</p>"
        return el;
    }
}

export const Warning: Story = {
    render: (args) => {
        const el = document.createElement('wc-callout');
        el.setAttribute('type', "warning");
        el.innerHTML = "<p>This is the inner text</p>"
        return el;
    }
}

 export const Success: Story = {
    render: (args) => {
        const el = document.createElement('wc-callout');
        el.setAttribute('type', "success");
        el.innerHTML = "<p>This is the inner text</p>"
        return el;
    }
}