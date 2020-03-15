import styled from 'styled-components';

const theme = ['#D4CEC2', '#B2AFA9', '#462A1B', '#121210', '#B45122'];

export const StyledHeader = styled.header`
  font-family: 'Marck Script', cursive;
  padding: 3rem 0;
  color: ${theme[3]};
`;

export const Title = styled.h1`
  position: absolute;
  left: -500rem;
`;

export const Container = styled.div`
  max-width: 65rem;
  margin: 0 auto;
`;

export const StyledBanner = styled.figure`
  margin: 0;

  display: flex;
`;

export const ImgContainer = styled.div`
  width: 25rem;
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

    h2::before {
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

export const Name = styled.h2`
font-size: 2.5rem;
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

export const Caption = styled.figcaption`
  margin-left: 8rem;
`;

export const Job = styled.h3`
  font-size: 2rem;
  margin: 0;
`;

export const About = styled.p`
  font-size: 1.2rem;
`;