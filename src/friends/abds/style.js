import styled from 'styled-components';

const theme = ['#D4CEC2', '#B2AFA9', '#462A1B', '#121210', '#B45122'];

export const StyledHeader = styled.header`
  border: 1px solid #444;
  padding: 3rem 0;
  color: ${theme[3]};
`;

export const Container = styled.div`
  max-width: 65rem;
  margin: 0 auto;
`;

export const StyledBanner = styled.figure`
  width: 25rem;
  margin: 0;
  background: linear-gradient(90deg, ${theme[0]} 0%, rgba(255,255,255,1) 100%);

  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    z-index: -2;
    top: -1rem;
    left: -1rem;
    bottom: 1rem;
    right: 1rem;
    background-color: ${theme[2]};
  }

  &::after {
    z-index: -1;
    top: -.5rem;
    left: 1rem;
    bottom: .5rem;
    right: -.5rem;
    background-color: ${theme[4]};
  }

  &:hover {
    img {
      clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%)
    }

    h1::before {
      clip-path: circle(100%);
    }
  }
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: top;
  clip-path: polygon(44% 5%, 83% 21%, 78% 70%, 21% 65%, 16% 31%);
  transition: clip-path .4s ease-in-out;
`;

export const Name = styled.h1`
  font-size: 2.5rem;
  font-family: 'Marck Script', cursive;
  margin: 0;
  position: absolute;
  z-index: 1;
  bottom: -1.8rem;
  left: 2rem;
  font-weight: 400;
  
  &::before {
    content: '';
    position: absolute;
    width: 12rem;
    height: 2.5rem;
    background: linear-gradient(90deg, transparent 0%, ${theme[4]} 100%);
    z-index: -1;
    right: -2rem;
    top: -.5rem;
    clip-path: circle(8% at 94%);
    transition: clip-path .4s ease-in-out;
  }
`;