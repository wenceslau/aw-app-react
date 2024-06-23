import Heart from './Heart';

export default {
  title: 'Components/Heart',
  component: Heart,
  tags: ['autodocs'],
  argTypes: {
    onclick: {
      action: 'clicked',
      type: { name: 'function', required: true },
      description: 'Function to be called when the heart is clicked'
    },
    testId: {
      control: 'text',
      type: { name: 'string', required: true},
      description: 'Test id for the heart component'
    },
    selected: {
      control: 'boolean',
      type: { name: 'boolean', required: true },
      description: 'Boolean to determine if the heart is selected or not'
    }
  }
};

export const Template = (args) => (
  <div className="heart-storybook-wrapper">
    <Heart selected={false} testId={'heart-1'}/>
  </div>
);
