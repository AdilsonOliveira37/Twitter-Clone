import React from 'react';
import ProfilePage from '../ProfilePage';

import { Container,
         Header,
         BackIcon,
         ProfileInfo,
         BottomMenu,
         HomeIcon,
         SearchIcon,
         EmailIcon,
         BellIcon,
        } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon></BackIcon>
            </button>
            <ProfileInfo>
                <strong>Adilson Oliveira</strong>
                <span>612 Tweets</span>
            </ProfileInfo>
        </Header>
        <ProfilePage></ProfilePage>
        <BottomMenu>
            <HomeIcon className="active"/>
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu>
    </Container>
  );
}

export default Main;