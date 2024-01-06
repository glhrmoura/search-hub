import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sml}px;
  padding: ${({ theme }) => theme.spacing.base}px;
  height: 56px;
`;

export const Title = styled.span``;

export const LeftContent = styled.div`
  min-width: 30px;
`;

export const RightContent = styled.div`
  min-width: 30px;
`;
