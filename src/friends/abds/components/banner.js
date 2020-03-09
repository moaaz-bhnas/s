import React from 'react';
import { 
  StyledBanner,
  Img,
  Name
} from '../style';
import abds from '../../../img/abds.jpg';

const Banner = () => {
  return (
    <StyledBanner>
      <Img src={abds} alt="Abdullah" />
      <Name>A. Bhnas</Name>
    </StyledBanner>
  );
}

export default Banner;