import styled from 'styled-components';

export const StyledButton = styled.div<{color: string}>`
  border-radius: .5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background: ${({ theme, color }) => theme.colors[color]};
  padding: .5rem;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    filter: brightness(130%);
  }

  p {
    color: white;
    text-transform: uppercase;
    text-align: center;
    user-selct: none;
  }
`;