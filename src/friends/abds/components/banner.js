import React from 'react';
import { 
  StyledBanner,
  Img
} from '../style';
import abds from '../../../img/abds.jpg';

const Banner = () => {
  return (
    <StyledBanner>
      <Img src={abds} alt="Abdullah" />
    </StyledBanner>
  );
}

export default Banner;