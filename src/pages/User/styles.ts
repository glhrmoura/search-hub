import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg}px;
  overflow: hidden;
`;

export const Content = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: ${({ theme }) => theme.spacing.sml}px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.base}px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.base}px;
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export const Biograph = styled.p`
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 18px;
  padding: 0px ${({ theme }) => theme.spacing.base}px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md}px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SortButton = styled.div`
  display: inline-flex;
  border: none;
  cursor: pointer;
  position: relative;
  align-self: flex-end;
  user-select: none;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  background-color: ${({ theme }) => theme.colors.gray700};
  padding: ${({ theme }) => theme.spacing.sml}px ${({ theme }) => theme.spacing.md}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray600};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray700};
  }
`;

export const ExternalLink = styled.a`
  display: flex;
`;