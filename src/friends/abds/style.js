import styled from 'styled-components';

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
    background-color: #462A1B;
  }

  &::after {
    z-index: -1;
    top: -.5rem;
    left: 1rem;
    bottom: .5rem;
    right: -.5rem;
    background-color: #B45122;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: top;
`;