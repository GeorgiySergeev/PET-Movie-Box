import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;
export const Input = styled.input`
  width: 100%;
  border: 1px solid grey;
  height: 35px;
  border-radius: 8px;
  padding: 2px 15px;
  background-color: transparent;
  color: aqua;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 20px;
  top: 6px;
  /* width: 10px;
  height: 25px; */
  /* border-radius: 1px 8px 8px 1px; */
  /* background-color: #f33f3f; */
  border: none;
  :hover {
    scale: 101%;
    -webkit-box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
    box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
  }
`;
