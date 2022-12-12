import styled from "@emotion/styled";

export const List = styled.ul`
    /* https://www.8host.com/blog/stilizaciya-polosy-prokrutki-v-css/ */
  ::-webkit-scrollbar {
    width: 15px; /* ширина всей полосы прокрутки */
  }

  ::-webkit-scrollbar-track {
    background: #de89c0; /* цвет зоны отслеживания */
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #831092; /* цвет бегунка */
    border-radius: 20px; /* округлось бегунка */
    border: 2px solid #e6e6e6ba; //отступ вокруг бегунка
  }

  overflow-y: scroll;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  border-radius: 15px;
`;

export const Item = styled.li`
width: 95%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin: 5px 0;
  border-radius: 5px;
  background-color: #e9e9e9;

  box-shadow: rgb(0, 0, 0) 0px 1px 5px;
  transition: all 300ms ease-out;

  &:hover {
    background: linear-gradient(27deg, #cc1092 0%, #3a1092 100%);
    scale: 1.05;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.885) 0px 7px 10px;
  }
  &:hover img {
    box-shadow: rgba(255, 255, 255, 0.9) 0px 0px 10px;
  }
`;
export const Avatar = styled.img`
  margin-left: 10px;
  width: 40px;
  height: 40;
  border-radius: 50px;
  transition: all 250ms ease-out;
`;

export const UserInfo = styled.p`
  margin-left: 15px;
`;

export const DeleteBtn = styled.button`
  padding-top: 2px;
  max-height: 25px;
  margin-left: auto;
  margin-right: 15px;
  border-radius: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: all 200ms ease-out;

  &:hover {
    color: #ffffff;
    background: linear-gradient(27deg, #cc1092 0%, #3a1092 100%);

    box-shadow: rgb(255, 254, 254) 0px 0px 3px;
  }
`;
