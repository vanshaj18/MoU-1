import React, { Component } from 'react'
import { Menu, Dropdown, Checkbox, Icon, Segment } from 'semantic-ui-react'
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
      <Menu attached='top' secondary size='massive' >
        <Menu.Menu>
          <Menu.Item
            name='MOU'
            color='blue'
            active={false}
            content='MOU'
            onClick={this.handleItemClick}
          />
        </Menu.Menu>

        <Menu.Menu position='right'>
          <Menu.Item
            name='Register'
            color='blue'
            active={activeItem === 'Register'}
            content='Register'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Attendees'
            color='blue'
            active={activeItem === 'Attendees'}
            content='Attendees'
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar