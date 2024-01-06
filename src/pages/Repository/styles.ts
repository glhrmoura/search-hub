import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg}px;
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.base}px;
`;

export const TreeContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const Name = styled.h2`
  margin: 0px;
  display: flex;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.mdl}px;
`;

export const Description = styled.p`
  text-align: center;
  margin: 0px;
  margin-top: ${({ theme }) => theme.spacing.base}px;
`;

export const ExternalLink = styled.a`
  display: flex;
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

export const MarkdownContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.base}px;

  & * {
    font-size: 14px;
  }

  & h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.base}px;
  }

  & h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.base}px 0px;
  }

  & h3 {
    font-size: 18px;
    font-weight: 600;
    margin: ${({ theme }) => theme.spacing.base}px 0px;
  }

  & h4 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.spacing.base}px;
    margin: ${({ theme }) => theme.spacing.base}px 0px;
  }
`;
