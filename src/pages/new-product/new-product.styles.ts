import styled from 'styled-components';

export const StyledNewProduct = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  height: calc(100vh - 70px);

  > div {
    height: 100%;
  }

  .product-form {
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
  }

  .products-list-wrapper {
    display: grid;
    grid-template-rows: auto 60px;
  }

  .products-list {
    overflow-y: auto;
  }

  .products-options {
    border-top: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    gap: 2rem;
    text-align: center;
  }
`;