import React from 'react';
import './ExampleComponent.css';

class ExampleComponent extends React.PureComponent {
  render() {
    return (
      <div className={"ExampleComponent"}>
        <h3>
          <span role="img" aria-label="React Logo">
            ⚛️
          </span>
          Welcome to Storybook !
        </h3>
      </div>
    );
  }
}

export default ExampleComponent;
