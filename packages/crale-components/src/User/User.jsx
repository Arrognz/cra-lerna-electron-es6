import React from 'react';
import './User.css';

class User extends React.PureComponent {
  render() {
    const { user } = this.props;
    if (this.props.skeleton) {
      return (
        <div className="skeleton" style={{ width: '300px', height: '40px' }} />
      );
    }
    return (
      <div className="User">
        <h3>
          <span role="img" aria-label="React Logo">
            ⚛️
          </span>
          {user && user.toString()}
        </h3>
        {
          user && user.mail && (
          <p>
            {user.mail}
          </p>
          )
        }
      </div>
    );
  }
}

export default User;
