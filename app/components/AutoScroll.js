import { Scroll, ScrollProvider, ScrollLink } from 'react-skroll'

class Demo extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <nav>
        {
          this.props.scroll.children.map((child, index) =>
            <ScrollLink key={index} index={index} to={child.name}>
              {child.name}
            </ScrollLink>
          )
        }
        </nav>

        <Scroll>
          {/* name: optional, used to generate the navigator */}
          <section name="Home">
            ...
            <ScrollLink to="About" />
          </section>
          <section name="About">
            ...
            <ScrollLink to="Contact" />
          </section>
          <section name="Contact">
            ...
            <ScrollLink to="Home" />
          </section>
        </Scroll>
      </div>
    )
  }
}

ReactDOM.render(
  <ScrollProvider>
    <Demo />
  </ScrollProvider>,
  document.getElementById('app')
)
