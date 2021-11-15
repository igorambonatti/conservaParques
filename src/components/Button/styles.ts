import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #2acb47;
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-weight: 500;
  margin-top: 16px;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#2ACB47')};
  }
`;
