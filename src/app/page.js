"use client";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <Container>
      <h1>Bosh sahifa ishlamoqda!</h1>
    </Container>
  );
}