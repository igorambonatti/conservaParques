import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .credits {
    font-size: 18px;
    color: #2acb47;
  }
  .logos {
    display: flex;
    justify-content: center;
    > img {
      height: 200px;
    }
    > img + img {
      margin-left: 30px;
    }
  }
  > header {
    margin: 30px;
    > h1 {
      font-size: 30px;
      color: #2acb47;
      text-align: center;
    }
  }
  > div {
    width: 60%;
    display: flex;
    span {
      font-size: 22px;
      text-align: justify;
    }
    @media (max-width: 900px) {
      display: block;
    }
  }
  > span {
    margin: 20px;
    font-size: 20px;
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
    margin: 15px;
    background: none;
    border: none;
    color: #2acb47;
    transition: all 0.2s ease-in;
    font-size: 22px;
    &:hover {
      transform: translateY(-2px);
    }
  }
`;
