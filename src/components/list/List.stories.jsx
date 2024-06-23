import List from './List';

const mockedItems = [
  {
    id: 1,
    name: 'bulbasaur',
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        }
      }
    }
  },
  {
    id: 2,
    name: 'bulbasaur2',
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        }
      }
    }
  }
];

export default {
  title: 'Components/List',
  component: List,
  tags: ['autodocs']
};

const Template = (args) => (
  <div>
    <List items={mockedItems}/>
  </div>
);

export const Default = Template.bind({});
