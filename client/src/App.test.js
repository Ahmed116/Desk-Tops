import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  import reducers from '../../reducers';

  test('reducers', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual({ counter: 0, isLogged: false });
  });

  expect(getByText(/learn/i)).toBeInTheDocument();
});
