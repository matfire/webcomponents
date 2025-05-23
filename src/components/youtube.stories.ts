import type { Meta, StoryObj } from '@storybook/html';
import './youtube'
const meta: Meta = {
  component: 'wc-youtube',
  args: {
    "id": "jm45n5bh2Ak"
  },

};
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
    render: (args) => {
        const el = document.createElement('wc-youtube');
        el.setAttribute('id', args['id']);
        return el;
    }
}