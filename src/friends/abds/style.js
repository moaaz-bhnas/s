import styled from 'styled-components';

const theme = ['#D4CEC2', '#B2AFA9', '#462A1B', '#121210', '#B45122'];

export const StyledHeader = styled.header`
  border: 1px solid #444;
  padding: 3rem 0;
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
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: top;
  clip-path: polygon(44% 5%, 83% 21%, 78% 70%, 21% 65%, 16% 31%);
`;