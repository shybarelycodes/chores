import React from "react";
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
    font-family: 'Poppins', sans-serif;
  }
`;


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem; /* space for smaller screens */
`;


const Title = styled.h1`
  color: #d2b48c;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1.8rem; /* smaller on phones */
  }
`;


const Card = styled.div`
  background: linear-gradient(135deg, #8B5E3C, #5C4033);
  padding: 1.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.7);
  font-size: 1.2rem;
  font-weight: 500;
  width: 320px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.9);
  }

  @media (max-width: 600px) {
    width: 100%; /* full width on phones */
    font-size: 1rem; /* smaller text */
    padding: 1rem;
  }
`;

// Helper: get current week number
function getWeekNumber() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 1);
  const diff = (today - start + (start.getTimezoneOffset() - today.getTimezoneOffset()) * 60000);
  return Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
}

function App() {
  const roommates = ["Alice", "Bob", "Charlie", "Dana", "Evan"];
  const chores = ["Vacuuming", "Kitchen Counter", "Sweeping", "Mopping", "Trash"];

  const week = getWeekNumber();

  // Rotate chores
  const assignments = roommates.map((person, i) => {
    const chore = chores[(i + week) % chores.length];
    return { person, chore };
  });

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>🏠 Roommate Chore Board</Title>
        {assignments.map(({ person, chore }) => (
          <Card key={person}>
            <strong>{person}</strong> → {chore}
          </Card>
        ))}
      </Container>
    </>
  );
}

export default App;
