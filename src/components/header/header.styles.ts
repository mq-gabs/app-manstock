import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100px;
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
    width: 5rem;
    height: 5rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;

    h1 {
      display: none;
    }
  }
`;