import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #ffffff;
  width: 350px;
  margin: 0 auto 50px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 40px 25px;
  font-style: 700;
  font-size: 25px;
  text-align: center;
`;

export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  text-align: center;
  padding: 10px;
  color: #ffffff;

  :nth-of-type(1) {
    background-color: lightblue;
  }

  :nth-of-type(2) {
    background-color: pink;
  }

  :nth-of-type(3) {
    background-color: orangered;
  }

  :nth-of-type(4) {
    background-color: purple;
  }

  :nth-of-type(5) {
    background-color: orange;
  }
`;

export const StatLabel = styled.span`
  margin-bottom: 7px;
`;

export const StatPersentage = styled.span``;
