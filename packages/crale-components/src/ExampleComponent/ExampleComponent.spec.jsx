import React from 'react';
import ReactDOM from 'react-dom';
import ExampleComponent from './ExampleComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExampleComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
