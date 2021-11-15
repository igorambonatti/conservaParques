import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasBorder: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;

  border: 2px solid #232129;
  color: #666360;
  display: flex;
  color: #2acb47;
  border-color: #2acb47;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${(props: ContainerProps): false | FlattenSimpleInterpolation =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props: ContainerProps): false | FlattenSimpleInterpolation =>
    props.isFocused &&
    css`
      color: #2acb47;
      border-color: #2eff53;
    `}
  ${(props: ContainerProps): false | FlattenSimpleInterpolation =>
    props.isFilled &&
    css`
      color: var(--primary);
    `}
  input {
    width: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
