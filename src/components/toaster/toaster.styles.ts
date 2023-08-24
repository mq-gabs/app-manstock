import styled from 'styled-components';

export const StyledToaster = styled.div`
  width: 300px;
  height: 600px;
  position: fixed;
  top: 0;
  right: 0;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledToast = styled.div<{ animationstate: string, type: string }>`
  border-radius: .5rem;
  height: 80px;
  animation-name: ${({ animationstate }) => animationstate};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  box-shadow: -3px 10px 10px rgba(0,0,0,.8);

  @keyframes pop-up {
    from {
      transform: translateX(300px);
    }
    to {
      transform: translateX(0px);
    }
  }

  @keyframes pop-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(300px);
    }
  }

  .toast-head {
    border-radius: .5rem .5rem 0 0;
    background: ${({ type }) => {
      if (type === 'success') {
        return '#00dd00';
      }
      if (type === 'warning') {
        return '#ff0000';
      }
      if (type === 'info') {
        return '#0000ff';
      }
    }};
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
    border: 1px solid black;
    
    img {
      width: 1rem;
      height: 1rem;
    }

    > img {
      cursor: pointer;
    }
  }
  
  .toast-head-title {
    display: flex;
    align-items: center;
    gap: .5rem;
    > p {
      font-weight: bold;
    }
  }

  .toast-body {
    padding: .5rem;
    border: 1px solid black;
    border-top: none;
    background: white;
    border-radius: 0 0 .5rem .5rem;
  }

  .toast-loadbar-wrapper {
    background: white;
    border: 1px solid black;
    border-top: none;
  }

  .toast-loadbar {
    height: 5px;
    background: black;
    animation-name: collapse;
    animation-duration: 8000ms;
    animation-delay: 300ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    @keyframes collapse {
      from {
        width: 100%;
      }
      to {
        width: 0%;
      }
    }
  }
`;