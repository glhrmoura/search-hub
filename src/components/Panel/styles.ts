import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md}px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  margin: 0px;
  font-size: 14px;
  font-weight: 600;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing.sml}px;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
`;

