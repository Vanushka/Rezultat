import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>
        Friends
      </Header.Content>
    </Header>
    <Image centered size='large' src='/assets/images/wireframe/centered-paragraph.png' />
  </div>
)

export default HeaderExampleUsersIcon
