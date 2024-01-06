import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
`;

export const Stat = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.mlg}px ${({ theme }) => theme.spacing.base}px;
  gap: ${({ theme }) => theme.spacing.sml}px;
  height: 100%;
`;

export const Label = styled.span`
  font-weight: 600;
  text-align: center;
`;

export const Value = styled.span`
  word-break: break-all;
  flex-shrink: 0;
`;