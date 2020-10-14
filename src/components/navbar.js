import React, { Component } from 'react'
import { Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Navbar extends Component {
  state = {
    activeItem: 'MOU'
  }

  componentDidMount () {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <Menu attached='top' secondary size='massive' color="black" inverted size="massive">
        
        <Menu.Menu>
          <Link to='/'>
            <Menu.Item
              name='MOU'
              color='grey'
              active={false}
              content='MOU'
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu.Menu>

        <Menu.Menu position='right'>

          <Link to='/register'>
            <Menu.Item
              name='Register'
              color='grey'
              active={activeItem === 'Register'}
              content='Register'
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to='/attendees'>
            <Menu.Item
              name='Attendees'
              color='grey'
              active={activeItem === 'Attendees'}
              content='Attendees'
              onClick={this.handleItemClick}
            />
          </Link>
          
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar