import React from 'react';
import styled from '@emotion/styled';

import { Card as CardType } from '../../types/card';

const StyledCardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  box-sizing: border-box;
  width: 150px;
  height: 180px;

  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  align-items: center;
`;

const StyledCardImg = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  text-align: center;
  background-color: gray;
`;

const StyledCardName = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

export const CardItem = ({ data }: { data: CardType }) => {
  const { audio, category, img, name } = data;

  return (
    <StyledCardItem>
      <StyledCardImg src={img} alt={name} draggable="false" />
      <StyledCardName>{name}</StyledCardName>
    </StyledCardItem>
  );
};
