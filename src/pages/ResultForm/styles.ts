import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .info {
    font-size: 14px;
  }
  .contrast {
    font-size: 28px;
    font-weight: bold;
    color: #2acb47;
  }
  .total {
    width: 80%;
    display: flex;
    background-color: #232129;
    padding: 5px;
    margin: 10px 0;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    > h1 {
      font-size: 22px;
      color: #2acb47;
    }
  }
  > header {
    margin: 30px;
    > h1 {
      color: #2acb47;
      font-size: 26px;
      text-align: center;
    }
    > h1 + h1 {
      font-size: 18px;
      margin-top: 20px;
    }
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      width: 80%;
      display: flex;
      flex-direction: column;
      @media (max-width: 900px) {
        display: block;
      }
      > div {
        > div {
          width: 100%;
          margin: 0 30px;
          > div {
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            display: flex;
            text-align: center;

            > h1 {
              font-size: 22px;
              color: #2acb47;
            }
            > div {
              display: flex;
              margin: auto;
              @media (max-width: 900px) {
                display: block;
              }
              > div {
                margin: 30px;
                > div {
                  width: 100%;
                  margin: 30px 0;
                  > div {
                    width: 100%;
                    display: flex;
                    background-color: #232129;
                    padding: 5px;
                    margin: 10px 0;
                    justify-content: space-between;
                    align-items: center;
                    > h2 {
                      width: 65%;
                      font-size: 20px;
                    }
                    > h1 {
                      width: 10%;
                      color: #2acb47;
                      font-size: 26px;
                    }
                    > span {
                      text-align: left;
                      width: 25%;
                      font-size: 18px;
                      margin-left: 30px;
                    }
                    > div {
                      width: 25%;
                      margin-left: 30px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    > button {
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
      margin-top: 15px;
      font-size: 16px;
      padding-bottom: 30px;
    }
  }
`;
