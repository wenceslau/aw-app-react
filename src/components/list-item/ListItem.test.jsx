import {render, screen} from '@testing-library/react';
import ListItem from './ListItem';

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

describe('ListItem Component', () => {
  const initialState = {mockedItem};
  const mockStore = configureStore();
  let store;

  it('should render correctly', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <ListItem item={mockedItem}/>
      </Provider>
    );
    expect(screen.getByTestId('list-item-1')).toBeInTheDocument();
  });
});
