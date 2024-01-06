import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 65px;
  gap: ${({ theme }) => theme.spacing.base}px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  padding: ${({ theme }) => theme.spacing.mlg}px ${({ theme }) => theme.spacing.base}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const Name = styled.span`
  font-weight: 800;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;