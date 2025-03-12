"use client";
import React from 'react';
import styled from 'styled-components';
import {colors} from "../utils/colors"
import {useMedia} from "../hooks/use-media"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 100vh;
  overflow-y: auto;  /* Enables vertical scrolling */
`;

const StyledBook = styled.div`
  background-color: ${props => props.color};
  color: #242b26;
  width: ${props => props.width}%;
  height: 100px;
  border-radius: 50px 0 0 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.p`
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  font-weight: bold;
`;
  
export const BookList = ({books}) => {

  const getWidth = (index, isMobile = false) => {
    const position = index % 12;
  
    // Desktop: 50% to 20% to 50%
    const desktopWidth = position < 6 
      ? 50 - (position * 5) 
      : 20 + ((position - 5) * 5);
  
    if (!isMobile) return desktopWidth;
  
    // Mobile: 80% to 50% to 80%
    return position < 6 
      ? 90 - (position * 5) 
      : 60 + ((position - 5) * 5);
  };

  const isMobile = useMedia([`(max-width: 768px)`], [true], false)

  return (
    <Container>
      {books.map((item, index) => (
        <StyledBook 
          key={item.id}
          color={colors[index % colors.length]}
          width={getWidth(index, isMobile)}
        >
          <StyledText>{item.title}</StyledText>
          <StyledText>{item.author}</StyledText>
        </StyledBook>
      ))}
    </Container>
  );
}
