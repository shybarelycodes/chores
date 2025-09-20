import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Global reset + font
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  body {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5; /* light grey background */
    color: #222; /* dark text for contrast */
    font-family: 'Inter', sans-serif;
  }
`;

// Page container
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  gap: 2rem;
`;

// Title
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #3a6ea5; /* soft blue accent */
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Grid for cards
const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

// Chore card
const Card = styled.div`
  background: linear-gradient(145deg, #d9eafd, #b0cde8); /* light blue gradient */
  padding: 1.25rem;
  border-radius: 14px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  }
`;

// Helper: week calculation
function getWeekNumber() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 1);
  const diff = (today - start + (start.getTimezoneOffset() - today.getTimezoneOffset()) * 60000);
  return Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
}

function App() {
  const roommates = ["Shyam D", "Shyamsundar", "Raman", "Pradip", "Pitam"];
  const chores = ["Vacuuming", "Kitchen Counter", "Sweeping", "Mopping", "Trash"];

  const week = getWeekNumber();

  const assignments = roommates.map((person, i) => {
    const chore = chores[(i + week) % chores.length];
    return { person, chore };
  });

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>🏠 Roommate Chore Board</Title>
        <Grid>
          {assignments.map(({ person, chore }) => (
            <Card key={person}>
              <strong>{person}</strong> <br />
              {chore}
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
