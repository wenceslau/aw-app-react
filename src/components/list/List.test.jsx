import { render, screen } from '@testing-library/react';
import List from './List';

import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockedItem = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    other: {
      'official-artwork': {
        front_default: ''
      }
    }
  }
};

const mockedItems = [
  mockedItem,
  {
    id: 2,
    name: 'ivysaur',
    sprites: {
      other: {
        'official-artwork': {
          front_default: ''
        }
      }
    }
  }
];

const mockedFavorites = [1];

describe('List Component', () => {

  const initialState = {mockedItem};
  const mockStore = configureStore();
  let store;

  it('should render correctly', () => {
    render(<List />);
    expect(screen.getByTestId('list')).toBeInTheDocument();
  });

  it('should render items correctly', () => {
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <List items={mockedItems} />
      </Provider>

    );
    expect(screen.getByTestId('list')).toBeInTheDocument();
    expect(screen.getByTestId('list-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('list-item-2')).toBeInTheDocument();
  });
});
