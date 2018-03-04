import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Scroll, ScrollProvider, ScrollLink } from 'react-skroll';

class Demo extends Component {
  render() {
    return (
      <div style={style.wrapper}>
        <nav>
            <ScrollLink key={index} index={index} to={child.name}>
              {child.name}
            </ScrollLink>
          )
        }
        </nav>

        <Scroll>
          {/* name: optional, used to generate the navigator */}
          <section name='Home'>
            ...
            <ScrollLink to='AboutUs' />
          </section>
          <section name='About'>
            ...
            <ScrollLink to='Contact' />
          </section>
          <section name='Contact'>
            ...
            <ScrollLink to='Home' />
          </section>
        </Scroll>
      </div>
    );
  }
}

ReactDOM.hydrate(
  <ScrollProvider autoScroll={true}>
    <Demo />
  </ScrollProvider>,
  document.getElementById('render')
);
