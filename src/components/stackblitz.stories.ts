import type { Meta, StoryObj } from '@storybook/html';
import './stackblitz'
const meta: Meta = {
  component: 'wc-stackblitz',
  args: {
    "id": "mg-fbr-express"
  },

};
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
    render: (args) => {
        const el = document.createElement('wc-stackblitz');
        el.setAttribute('projectid', args['id']);
        return el;
    }
}