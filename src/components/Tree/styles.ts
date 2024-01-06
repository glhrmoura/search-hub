import styled from 'styled-components';

export const Container = styled.div<{ $sub?: boolean; $opened?: boolean; }>`
  display: flex;
  user-select: none;
  position: relative;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span``;

export const FolderContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing.sml}px;
  padding-bottom: ${({ theme }) => theme.spacing.sml}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const FolderHead = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md}px;
  cursor: pointer;
  align-self: flex-start;
`;

export const FileContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md}px;
  padding-top: ${({ theme }) => theme.spacing.sml}px;
  padding-bottom: ${({ theme }) => theme.spacing.sml}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const Link = styled.a``;
