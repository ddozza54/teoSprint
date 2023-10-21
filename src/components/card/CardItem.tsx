import styled from '@emotion/styled';

import { Card as CardType } from '../../types/card';

const StyledCardItem = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  flex-basis: calc(25% - 40px); // 20px은 부모의 gap

  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  align-items: center;
`;

const StyledCardName = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

export const CardItem = ({ data }: { data: CardType }) => {
  const { audio, category, img, name } = data;

  return (
    <StyledCardItem>
      <img src={img} alt={name} draggable="false" />
      <StyledCardName>{name}</StyledCardName>
    </StyledCardItem>
  );
};
