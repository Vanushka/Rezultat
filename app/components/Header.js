import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Segment>
          <img alt='Картинка' src='images/logo.png' />
        </Segment>
      </div>
    )
  }
}
