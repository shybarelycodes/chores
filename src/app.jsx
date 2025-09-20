import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
`;


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  gap: 2rem;
  background-color: ${({ darkMode }) => (darkMode ? "#002f5e" : "#f5f5f5")};
  color: ${({ darkMode }) => (darkMode ? "#f5f5f5" : "#222")};
  transition: background-color 0.3s ease, color 0.3s ease;
`;


const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ darkMode }) => (darkMode ? "#9ecfff" : "#3a6ea5")};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;


const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;


const Card = styled.div`
  background: ${({ darkMode }) =>
    darkMode
      ? "linear-gradient(145deg, #00509e, #003f7f)"
      : "linear-gradient(145deg, #d9eafd, #b0cde8)"};
  padding: 1.25rem;
  border-radius: 14px;
  box-shadow: ${({ darkMode }) =>
    darkMode
      ? "0 4px 12px rgba(0,0,0,0.6)"
      : "0 4px 10px rgba(0,0,0,0.1)"};
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ darkMode }) =>
      darkMode
        ? "0 8px 20px rgba(0,0,0,0.9)"
        : "0 6px 16px rgba(0,0,0,0.15)"};
  }
`;


const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleButton = styled.button`
  width: 60px;
  height: 30px;
  background: ${({ darkMode }) => (darkMode ? "#004080" : "#ddd")};
  border-radius: 30px;
  border: none;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;

  &:focus {
    outline: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: ${({ darkMode }) => (darkMode ? "32px" : "3px")};
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    transition: left 0.3s ease;
  }
`;


function getWeekNumber() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 1);
  const diff =
    today - start + (start.getTimezoneOffset() - today.getTimezoneOffset()) * 60000;
  return Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
      <Container darkMode={darkMode}>
        <ToggleWrapper>
          <ToggleButton darkMode={darkMode} onClick={() => setDarkMode(!darkMode)} />
        </ToggleWrapper>
        <Title darkMode={darkMode}>🏠 Roommate Chore Board</Title>
        <Grid>
          {assignments.map(({ person, chore }) => (
            <Card key={person} darkMode={darkMode}>
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
