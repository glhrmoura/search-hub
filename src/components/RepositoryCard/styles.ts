import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.mdl}px;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.mlg}px ${({ theme }) => theme.spacing.base}px;
  cursor: pointer;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  background-color: ${({ theme }) => theme.colors.gray700};
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const Name = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sml}px;
  font-weight: 800;
  word-break: break-all;
`;

export const RightContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md}px;
  align-items: center;
  flex-shrink: 0;
`;

export const LeftContent = styled.div`  
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.mdl}px;
  flex: 1;
`;
