import React from 'react';

import { Container,
         Banner,
         Avatar,
         ProfileData,
         LocationIcon,
         CakeIcon,
         Followage,
  } from './styles';

const ProfilePage: React.FC = () => {
  return (
  <Container>
      <Banner>
          <Avatar/>
      </Banner>
      <ProfileData>
          {/* <EditarButton outlined>Editar Perfil</EditarButton> */}
          <h1>Adilson Oliveira</h1>
          <h2>@dirsoz</h2>
          <p>
              Developer at home
          </p>
          <ul>
              <li>
                  <LocationIcon />
                  Minas Gerais, Brasil
              </li>
              <li>
                  <CakeIcon />
                  Nascido em 10 de Janeiro de 2000
              </li>
          </ul>

          <Followage>
              <span>
                  Seguindo <strong>94</strong>
              </span>
              <span>
                 <strong>1800 </strong>Seguindo 
              </span>
          </Followage>
      </ProfileData>
  </Container>);
}

export default ProfilePage;