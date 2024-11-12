import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Post from '../post/Post';

const mockStore = configureStore([]);
const post = {
  id: '1',
  title: 'Test Post',
  selftext: 'This is a test post.',
  author: 'testuser',
  created_utc: 1629456789,
  ups: 10,
  downs: 2,
  num_comments: 5,
  comments: [],
  showingComments: false,
};

const store = mockStore({
  reddit: {
    posts: [post],
  },
});

test('renders Post component', () => {
  render(
    <Provider store={store}>
      <Post post={post} index={0} />
    </Provider>
  );

  expect(screen.getByText('Test Post')).toBeInTheDocument();
  expect(screen.getByText('This is a test post.')).toBeInTheDocument();
  expect(screen.getByText('Posted by u/testuser')).toBeInTheDocument();
});

test('shows comments on button click', () => {
  render(
    <Provider store={store}>
      <Post post={post} index={0} />
    </Provider>
  );

  fireEvent.click(screen.getByText('Show Comments'));
  expect(screen.getByText('Hide Comments')).toBeInTheDocument();
});
