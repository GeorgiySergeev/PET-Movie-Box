import styled from '@emotion/styled';

export const Container = styled.div`
  /* padding: 60px; */
  /* width: 580px; */
`;

export const HeadWrapper = styled.div`
  /* width: 100%; */
  display: flex;

  margin-bottom: 45px;
  border: 1px solid gray;
  border-radius: 8px;
`;
export const InfoWrapper = styled.div`
  /* width: 100%; */
  /* width: 645px; */
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 650px;
`;

export const Image = styled.img`
  min-width: 350px;
  min-height: 475px;
  /* width: 100%; */
  /* height: 100%; */
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 46px;
  margin: 10px 0px;
  font-family: 'Lato', sans-serif;
`;
export const TitleSecond = styled.h2`
  font-size: 26px;
  margin-bottom: 10px;
  font-family: 'Lato', sans-serif;
`;

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* width: 131px; */
  /* height: 95px; */
  border: 1px solid #a41b1b;
  border-radius: 8px;
  text-align: center;
  padding: 15px;
  background-color: #3b3b3b;
  margin-top: auto;

  p {
    display: block;
    font-size: 24px;
    margin-bottom: auto;
  }
  h3 {
    font-size: 48px;
    color: #f33f3f;
  }
`;

export const TextOverview = styled.p`
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  line-height: 2.5cap;
  margin-bottom: 25px;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  font-family: 'Lato', sans-serif;

  li:not(:last-child) {
  }

  li:last-child {
    margin-right: 25px;
  }
`;

export const StyledLi = styled.li`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  a {
    :active {
      color: #f33f3f;
    }
    :hover {
      color: #f33f3f;
    }
  }
`;
