import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  font-size: 1.6rem;
  background: #6ce6ff;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  color: #312e38;
  margin-top: 16px;
  font-weight: 500;
  transition: 0.2s all;

  &:hover {
    background: ${shade(0.2, '#6ce6ff')};
  }
`;
