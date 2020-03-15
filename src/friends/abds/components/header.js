import React from 'react';
import { 
  StyledHeader,
  Container,
  Title
} from '../style';
import Banner from './banner';

const Header = () => {
  return (
    <StyledHeader>
      <Title>Abds</Title>
      
      <Container>
        <Banner />
      </Container>
    </StyledHeader>
  );
}

export default Header;