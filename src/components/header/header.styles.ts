import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 70px;
  padding: 0 2rem;
  display: flex;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
  }

  img {
    width: 3rem;
    height: 3rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;

    h1 {
      display: none;
    }
  }
`;