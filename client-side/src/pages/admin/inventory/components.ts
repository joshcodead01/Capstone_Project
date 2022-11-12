import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: rgb(179,202,179);
    }
`;
export const InventoryLayout = styled.section`
  display: flex;
  height: 100vh;
  padding: 10px 0px;
  justify-content: space-evenly;
  overflow:hidden;
  gap: 10px;
  padding: 10px;
  /* padding-top: 10px; */
`;
export const InventoryLeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  @media (max-width:1200px) {
    display: none;
  }
  & > :is(h1, small) {
    margin-block: 10px 0;
  }

  & > h1 {
    font-weight: 500;
    font-size: 1.2em;
    color: white;
  }

  & > small {
    color: white;
  }
`;
export const SearchItemContainer = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border: solid 1px gray;
  border-radius: 10px;
  margin: 10px 0;
  background: white;

  & > i {
    font-size: 1.1;
    padding: 5px;
  }

  & > input {
    padding: 5px 10px;
    width: 90%;
    border: none;
    outline: none;
    background: none;
  }
`;
export const ProductStatisticContainer = styled.div`
  padding: 10px;
  background: white;
  border-radius: 10px;
  height: 80%;
  & > .product__info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    & > .product__label {
      font-size: 0.7em;

      & > .center {
        margin: 0px auto;
      }
    }
  }
`;

export const ProductStatistic = styled.div`
  width: 100%;
  height: 450px;
`;

export const InventoryRightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 80%;
  border-radius: 10px;

  @media (max-width:1200px) {
    width: 100%;
  }

  @media (max-width:800px) {
    /* height: 100%; */
  }

`;

export const FilterItemsContainer = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  
  @media (max-width:800px) {
      flex-direction: column;
      align-items: flex-start;
    }

  & button {
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background: rgb(51,102,51);
    @media (max-width:800px) {
      padding: 10px 20px;
      font-size: 0.7em;
    }
    &:hover {
      background: rgb(1, 59, 77);
    }
  }

  & > .pagination {
    display: flex;
    align-items: center;

    @media (max-width:800px) {
      align-self: flex-end;
    }

    & > span {
        font-weight: 1000;
        font-size: 1.1em;
      @media (max-width:1200px) {
        font-size: 0.9em;
      }
    }

    & > :is(.left, .right) {
      background: rgb(51,102,51);
      padding: 5px;
      border-radius: 10px;
      color: white !important;
      margin-inline: 5px;
      cursor: pointer;
      transition: all 0.3s ease-in;
      padding: 8px;
      @media (max-width:1200px) {
        font-size: 1em;
        padding: 6px;
      }
    }

    & > :is(.left, .right):hover {
      background: rgb(1, 59, 77);
    }
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  border-radius: 10px;
  border: solid 1px gray;
  padding: 10px 10px;
  align-items: center;
  margin-inline: 5px;

  @media (max-width:1200px) {
      padding: 10px 10px;
    }

    @media (max-width:800px) {
      margin: 10px;
    }

  & > span {
    font-size: 0.8em;
    color: gray;

    @media (max-width:1200px) {
      display: none;
    }

    &::after {
      content: ": ";
    }
  }

  & > select {
    border: none;
    outline: none;
    border-radius: 10px;
    text-align: center;
    font-size: 0.8em;

    @media (max-width:800px) {
      font-size: 0.7em;
    }

    
  }
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width:750px) {
      & > .table__productAge {
        display: none;
      }
    }

    @media (max-width:650px) {
      & > .table__petType {
        display: none;
      }
    }

    @media (max-width:550px) {
      & > .table__productAge {
        display: none;
      }
    }

    @media (max-width:500px) {
      & > .table__productStock {
        display: none;
      }
    }

  & > div {
    flex: 1;
  }

  &.table__header {
    padding: 25px 0;
    color: rgb(99, 98, 98);
  }

  &.table__data {
    padding: 0px 0px 15px 0px;
  }

  & > .table__productName {
    flex: 2;

    @media (max-width:850px) {
      flex: 1;
    }

    
  }

  & > .table__image {
    display: flex;
    justify-content: center;

    @media (max-width:850px) {
      & {
        display: none;
    }
  }

  }

  & > .table__action > i {
    color: rgb(1, 59, 77);
    padding: 10px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    @media (max-width:760px) {
      padding: 5px;
    }
    &:hover {
      background: aliceblue;
      color: black;
    }
  }
`;

export const T_HEAD = styled.div`
  margin-top: 0px;
  color: gray;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const T_DATA = styled.div`
  margin-top: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /* @media (max-width:760px) {
      font-size: 0.8em;
    } */
  & > img {
    width: 50px;
    object-fit: contain;
    padding: 5px;
    border-radius: 10px;
    border: solid 1px gray;
    height: 50px;

    @media (max-width:760px) {
      width: 40px;
      height: 40px;

    }
  }
`;

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow: auto; */
  overflow-x: hidden;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  cursor: default;
  /* border-bottom: solid 1px gray; */
  justify-content: center;
  font-size: 0.9em;
  &:nth-child(even) {
    background: rgb(240,248,255);
  }
`;

export const ProductItemContainer = styled.div`
  display: none;
  padding: 20px;
  width: 100%;
  transition: all 0.3s ease-in-out;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width:800px) {
    align-self: flex-start;
  }

  & > .imgUploader {
    position: absolute;
    top: 72px;
    left: 20;
    width: 84%;
    opacity: 0;
    height: 32%;
    background: black;
    cursor: pointer;

    @media (max-width:800px) {
      top: 5px;
      width: 63%;
      height: 40%;
    }

    @media (max-width:650px) {
      top: 5px;
      width: 70%;
      height: 40%;
    }

  }

  & > button {
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px 40px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 10px;
    background: gray;

    &.deleteBtn {  
    background-color: maroon !important;
    }

    &.updateBtn {
      background: lightgreen !important;
    }

    @media (max-width:650px) {
      padding: 10px 20px;
      font-size: 0.9em;
    }
  }

 

  & > .item__image {
    width: 100px;
    object-fit: cover;
    padding: 15px;
    border-radius: 10px;
    border: solid 1px gray;
    height: 100px;
    align-self: center;
    cursor: pointer;

    @media (max-width:800px) {
      width: 50px;
      height: 50px;
    }
  }
`;
export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 20px 0 10px;

  @media (max-width:800px) {
    /* flex-direction: row; */
  }

  @media (max-width:600px) {
    margin:0;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  width: 100%;
  text-align: start;

  @media (max-width:800px) {
    flex-direction: column;
  }
  & > .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;

    & > label {
      font-size: 0.8em;
      color: gray;
      margin: 5px;
      text-align: start;

      /* @media (max-width:800px) {
        text-align: center;
       } */
    }

    & > input {
      padding: 10px;
      margin: 5px;
      border: none;
      border-bottom: solid 1px gray;
      outline: none;
      background: none;

      
      @media (max-width:800px) {
        width: 90%;
        /* align-self: center; */
      }
      &:disabled {
        color: rgb(187, 187, 187) !important;
        /* background: rgb(187, 187, 187); */
      }
    }

    & > textarea {
      padding: 10px;
      margin: 5px;
      border: none;
      border: solid 1px gray;
      outline: none;
      background: none;
      border-radius: 10px;
      resize: none;

      @media (max-width:800px) {
        width: 90%;
        /* align-self: center; */
        height: 100%;
       }
      &:disabled {
        color: rgb(177, 177, 177) !important;
        /* background: rgb(187, 187, 187); */
      }
    }

    & > select {
      padding: 10px;
      background: none;
      margin: 5px;
      border: none;
      border-bottom: solid 1px gray;
      outline: none;
      border-radius: 1px;
      &:disabled {
        color: rgb(150, 150, 150) !important;
        /* background: rgb(187, 187, 187); */
      }
    }
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  & button {
    color: white;
    height: fit-content;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    width: fit-content;
    margin: 10px;
    transition: all 0.3s ease-in-out;
    background: rgb(51,102,51);

    & .plus {
      color: white !important;
    }
    @media (max-width:800px) {
      padding: 10px 20px;
      font-size: 0.7em;
    }
  }
`