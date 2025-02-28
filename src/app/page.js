"use client";
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 100vh;
  overflow-y: auto;  /* Enables vertical scrolling */
`;

const StyledBook = styled.div`
  background-color: ${props => props.color};
  color: #ededed;
  width: ${props => props.width}%;
  height: 100px;
  border-radius: 50px 0 0 50px;
`;

export default function Home() {
  const colors = [
    'hotpink',
    '#90EE90',      // Olive Green
    '#4169E1',      // Royal Blue
    '#FF4500',      // Orange Red
    '#9932CC',      // Dark Orchid
    '#FFD700',      // Gold
    '#FF8C00',      // Dark Orange
    '#8A2BE2',      // Blue Violet
    '#1E90FF',      // Dodger Blue
    '#FFA500',      // Orange
    '#9370DB',      // Medium Purple
    '#00BFFF',      // Deep Sky Blue
    '#DDA0DD',      // Plum
    '#FFB6C1',      // Light Pink
    '#F4C430'       // Saffron
  ];
  const items = [
      { id: 'one', text: 'hello' },
      { id: 'two', text: 'hello' },
      { id: 'three', text: 'hello' },
      { id: 'four', text: 'hello' },
      { id: 'five', text: 'hello' },
      { id: 'six', text: 'hello' },
      { id: 'seven', text: 'hello' },
      { id: 'eight', text: 'hello' },
      { id: 'nine', text: 'hello' },
      { id: 'ten', text: 'hello' },
      { id: 'eleven', text: 'hello' },
      { id: 'twelve', text: 'hello' },
      { id: 'thirteen', text: 'hello' },
      { id: 'fourteen', text: 'hello' },
      { id: 'fifteen', text: 'hello' },
      { id: 'sixteen', text: 'hello' },
      { id: 'seventeen', text: 'hello' },
      { id: 'eighteen', text: 'hello' },
      { id: 'nineteen', text: 'hello' },
      { id: 'twenty', text: 'hello' },
  ]

  const getWidth = (index) => {
    // One complete cycle is 12 steps (50->20->50)
    const position = index % 12;
    
    if (position < 6) {
      // Decreasing from 50 to 20 in steps of 5
      return 50 - (position * 5);
    } else {
      // Increasing from 25 to 50 in steps of 5
      return 20 + ((position - 5) * 5);
    }
  };
  return (
    <Container>
      {items.map((item, index) => (
        <StyledBook 
          key={item.id}
          color={colors[index % colors.length]}
          width={getWidth(index)}
        />
      ))}
    </Container>
  );
}
