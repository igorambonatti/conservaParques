import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  img {
    width: 50%;
    margin: auto;
  }
  > h1 {
    font-size: 64px;
    color: #2acb47;
    margin-bottom: 20px;
  }
  > h2 {
    margin-bottom: 100px;
    font-size: 22px;
    width: 50%;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
  > div {
    > h1 {
      font-size: 22px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: 0 10px 20px rgb(0 0 0 / 15%);
    background: ${shade(0.1, '#312e38')};
    border-radius: 15px;
    padding: 40px;
    button {
      background: none;
      border: none;
      color: #2acb47;
      margin-top: 20px;
      transition: all 0.2s ease-in;
      font-size: 18px;
      &:hover {
        transform: translateY(-2px);
      }
    }
  }
  .MuiSelect-icon {
    top: calc(50% - 12px);
    color: #fff;
    right: 0;
    position: absolute;
    pointer-events: none;
  }
  input {
    color: #fff;
    background-color: #fff;
    border-color: #fff;
  }
`;
