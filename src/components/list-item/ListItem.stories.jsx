import ListItem from './ListItem';

const mockedItem = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
      }
    }
  }
}

export default {
  title: 'Components/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  argTypes: {
    item: {
      control: 'object',
      type: { name: 'object', required: true },
      description: 'Pokemon item to be displayed'
    }
  }
}

const Template = (args) => (
  <div>
    <ListItem key={mockedItem.id} item={mockedItem} />
  </div>
);

export const Default = Template.bind({});
