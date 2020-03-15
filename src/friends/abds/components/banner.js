import React from 'react';
import { 
  StyledBanner,
  ImgContainer,
  Img,
  Name,
  Caption,
  Job,
  About
} from '../style';
import abds from '../../../img/abds.jpg';

const Banner = () => {
  return (
    <StyledBanner>
      <ImgContainer>
        <Img src={abds} alt="Abdullah" />
        <Name>A. Bhnas</Name>
      </ImgContainer>

      <Caption>
        <Job>Writer</Job>
        <About>
          Known for the famous "Raining Amazon Rainforests" novel.
        </About>
      </Caption>
    </StyledBanner>
  );
}

export default Banner;