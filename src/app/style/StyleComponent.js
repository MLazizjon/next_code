import styled from 'styled-components';


// ? max-width
export const MaxWidth = styled.section`
max-width: 1250px;
margin: 0 auto;

`

// ? title
export const Title = styled.h1`
  font-size: 1.5em;
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;

  font-size: var(--fs-20);
  font-weight: var(--fw-600);
  color: var(--white);

  background: var(--primary);
  border: none;
  padding: 10px 15px;
  border-radius: 10px;

  cursor: pointer;
  isolation: isolate;

  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease;

  /* Light sweep */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -120%;

    width: 70%;
    height: 100%;

    background: linear-gradient(
      100deg,
      transparent,
      rgba(255, 255, 255, 0.35),
      transparent
    );

    transform: skewX(-20deg);
    transition: left 0.6s ease;

    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);

    box-shadow:
      0 10px 25px rgba(37, 90, 251, 0.25),
      0 0 35px rgba(127, 48, 251, 0.15);
  }

  &:hover::before {
    left: 140%;
  }

  &:active {
    transform: translateY(0) scale(0.97);
  }
`;