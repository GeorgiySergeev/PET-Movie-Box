import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  /* display: none; */
  position: sticky;
  top: 0px;

  width: 269px;

  padding: 25px 15px 15px 15px;
  height: 880px;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: '0px 4px 10px 4px #9e9e9e';
  background-color: #000;

  /* height: 839px; */

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Input = styled.input`
  cursor: pointer;
  /* transform: translateY(-50%) scale(0.9); */
  border: 5px solid #4c8bf5;
  color: tomato;
  /* position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 1px;
  opacity: 1;
  z-index: -1; */
  :checked {
    color: tomato;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  a {
  }
  gap: 15px;
  margin-top: 35px;

  margin-bottom: 35px;
`;

export const NavButton = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 41px;
  border-radius: 8px;

  :hover {
    -webkit-box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
    box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
  }
`;

// export const Form = styled.div`
//   width: 80px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;

//   border: 1px solid rgba(255, 190, 190, 0.2);
//   border-radius: 8px;
//   padding: 5px;
//   p {
//     font-size: 12px;
//     font-family: 'Archivo', sans-serif;
//   }
//   margin-bottom: 25px;
// `;

export const HeadTitle = styled.h1`
  color: #f33f3f;
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  font-size: 48px;
`;

export const WatchListButton = styled.button`
  width: 100%;
  height: 41px;
  background-color: #f33f3f;
  color: #141414;
  font-weight: 700;

  border-radius: 8px;
  :hover {
    -webkit-box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
    box-shadow: inset 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
  }
`;
