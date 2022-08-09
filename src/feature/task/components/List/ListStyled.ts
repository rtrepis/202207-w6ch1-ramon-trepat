import styled from "styled-components";

export const ListStyled = styled.div`
  text-align: -webkit-center;

  li {
    list-style: none;
  }
  .item {
    display: flex;
    padding: 5px;
    justify-content: space-between;
    max-width: 300px;

    .item-task {
      display: flex;
      padding: 5px;

      &__id {
        width: 20px;
        background-color: red;
        color: white;
        border-radius: 50%;
        text-align: center;
      }
    }
  }
`;
