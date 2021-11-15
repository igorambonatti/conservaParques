import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > header {
    margin: 30px;
    > h1 {
      color: #2acb47;
    }
  }
  > div {
    width: 60%;
    display: flex;
    span {
      font-size: 18px;
      text-align: justify;
    }
    @media (max-width: 900px) {
      display: block;
    }
  }
  > a {
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in;
    margin: 20px 0;
    background-color: #2acb47;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 22px;
    &:hover {
      transform: translateY(-2px);
    }
  }
  > button {
    margin-top: 15px;
    background: none;
    border: none;
    color: #2acb47;
    transition: all 0.2s ease-in;
    font-size: 20px;
    &:hover {
      transform: translateY(-2px);
    }
  }
  > button + button {
    font-size: 16px;
    padding-bottom: 30px;
  }
`;
