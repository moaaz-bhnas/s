import React from 'react';
import { 
  StyledHeader,
  Container
} from '../style';
import Banner from './banner';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Banner />
      </Container>
    </StyledHeader>
  );
}

export default Header;